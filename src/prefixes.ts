import prefixes from '@zazuko/prefixes'

const morePrefixes = {
  code: 'https://code.described.at/',
  'hydra-box': 'http://hydra-box.org/schema/',
  'hyper-auth': 'https://hypermedia.app/auth#',
  'hyper-events': 'https://hypermedia.app/events#',
  'hyper-query': 'https://hypermedia.app/query#',
  knossos: 'https://hypermedia.app/knossos#',
  roadshow: 'https://hypermedia.app/roadshow#',
  hex: 'https://w3id.org/hydra/extension#',
}

Object.entries(morePrefixes)
  .forEach(([prefix, namespace]) => {
    prefixes[prefix] = namespace
  })

type LocalPrefixes = typeof morePrefixes

declare module '@zazuko/prefixes/prefixes.js' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Prefixes extends LocalPrefixes {
  }
}

export default prefixes
