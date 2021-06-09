interface FileSpec {
  file?: string;
  mediaType?: string;
  xmlParserOptions?: {
    baseIRI: string;
  };
}

export interface Override extends FileSpec {
  skip?: boolean;
  files?: FileSpec[];
}

export const overrides: Record<string, Override> = {
  'hyper-auth': {
    file: 'file:src/vocabulary/auth.ttl'
  },
  'hyper-events': {
    file: 'file:src/vocabulary/events.ttl'
  },
  'hyper-query': {
    file: 'file:src/vocabulary/query.ttl'
  },
  knossos: {
    file: 'file:src/vocabulary/knossos.ttl'
  },
  roadshow: {
    file: 'file:src/vocabulary/roadshow.ttl'
  }
}
