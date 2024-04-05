/* eslint-disable no-console */
import { Readable } from 'stream'
import type { DatasetCore, DatasetCoreFactory, Stream } from '@rdfjs/types'
import ParserN3 from '@rdfjs/parser-n3'
import fromStream from 'rdf-dataset-ext/fromStream.js'
import addAll from 'rdf-dataset-ext/addAll.js'
import toStream from 'rdf-dataset-ext/toStream.js'
import E, { Environment } from '@rdfjs/environment/Environment.js'
import DatasetFactory from '@rdfjs/dataset/Factory.js'
import { loadDatasetStream } from './loadDataset/index.js'
import prefixes from './prefixes.js'

const defaultFactory = new E([DatasetFactory])

export type Datasets<D extends DatasetCore> = Partial<Record<keyof typeof prefixes, D>>

type Factory<D extends DatasetCore> = Environment<DatasetCoreFactory<any, any, D>>

interface VocabulariesOptions<D extends DatasetCore> {
  only?: (keyof typeof prefixes)[] | null
  factory?: Factory<D>
}

interface VocabulariesDatasetOptions<D extends DatasetCore> extends VocabulariesOptions<D> {
  stream?: false
}

interface VocabulariesStreamOptions<D extends DatasetCore> extends VocabulariesOptions<D> {
  stream: true
}

export async function vocabularies<D extends DatasetCore = DatasetCore>(options?: VocabulariesDatasetOptions<D>): Promise<Datasets<D>>
export async function vocabularies<D extends DatasetCore = DatasetCore>(options: VocabulariesStreamOptions<D>): Promise<Stream & Readable>
export async function vocabularies<D extends DatasetCore = DatasetCore>(options: VocabulariesDatasetOptions<D> | VocabulariesStreamOptions<D> = {}) {
  const { only = null, stream = false } = options
  const factory = options.factory || defaultFactory as unknown as Factory<D>
  let selectedPrefixes: (keyof typeof prefixes)[] = []

  if (!!only && Array.isArray(only)) {
    only.forEach((prefix: keyof typeof prefixes) => {
      if (prefix in prefixes) {
        selectedPrefixes.push(prefix)
      } else {
        console.warn(`unknown prefix '${prefix}'`)
      }
    })
  }
  if (!selectedPrefixes.length) {
    selectedPrefixes = Object.keys(prefixes) as any
  }

  const promises = selectedPrefixes.map((prefix) => loadFile<D>(prefix, { customSelection: !!only, factory }))
  const datasets: D[] = await Promise.all(promises)

  if (stream !== false) {
    let combinedDataset = factory.dataset()
    datasets.forEach((dataset) => {
      if (dataset && dataset.size) {
        combinedDataset = addAll(combinedDataset, dataset)
      }
    })
    return toStream(combinedDataset) as any
  }

  const result: Datasets<D> = {}
  datasets.forEach((dataset, i) => {
    if (dataset && dataset.size) {
      result[selectedPrefixes[i]] = dataset
    }
  })
  return result
}

interface LoadFileOptions<D extends DatasetCore> {
  customSelection?: boolean
  factory: Factory<D>
}

export async function loadFile<D extends DatasetCore>(prefix: keyof typeof prefixes, { customSelection, factory }: LoadFileOptions<D>): Promise<D> {
  const parserN3 = new ParserN3()
  const readStream = await loadDatasetStream(prefix)
  const quadStream = parserN3.import(readStream)

  const dataset = factory.dataset()
  await fromStream(dataset, quadStream).catch(() => {
    if (customSelection) {
      console.warn(`unavailable prefix '${prefix}'`)
    }
  })

  return dataset
}
