# @hydrofoil/vocabularies

Collection of vocabularies from the `https://hypermedia.app/` namespace

## Usage

### Builders

Easily construct terms using exported namespace builders

```typescript
import { knossos } from '@hydrofoil/vocabularies/builders'

const { memberTemplate } = knossos
```

### Extend `@zazuko/rdf-vocabularies`

Import somewhere at the beginning of your code

```javascript
import '@hydrofoil/vocabularies'
```

The namespaces will be added to the default selection and thus apply to the `expand/shrink` functionality as well as external libraries such as `@tpluscode/rdf-string`.

```javascript
import { prefixes } from '@zazuko/rdf-vocabularies'
```
