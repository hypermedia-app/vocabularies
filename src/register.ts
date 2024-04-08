import prefixes from '@zazuko/prefixes'
import morePrefixes from './prefixes.js'

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
