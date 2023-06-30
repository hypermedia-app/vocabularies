import prefixes from '@zazuko/prefixes'
import morePrefixes from './prefixes.js'

export { default as prefixes } from './prefixes.js'
export { vocabularies, loadFile } from './vocabularies.js'

Object.entries(morePrefixes)
  .forEach(([prefix, namespace]) => {
    prefixes[prefix] = namespace
  })
