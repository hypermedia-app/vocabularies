const prefixes = {
  'hyper-auth': 'https://hypermedia.app/auth#',
  'hyper-events': 'https://hypermedia.app/events#',
  'hyper-query': 'https://hypermedia.app/query#',
  knossos: 'https://hypermedia.app/knossos#',
  roadshow: 'https://hypermedia.app/roadshow#'
}

type LocalPrefixes = typeof prefixes

declare module '@zazuko/rdf-vocabularies/prefixes' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Prefixes extends LocalPrefixes {
  }
}

export default prefixes
