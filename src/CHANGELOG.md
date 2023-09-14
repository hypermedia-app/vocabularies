# @hydrofoil/vocabularies

## 1.1.0

### Minor Changes

- 2d16191: Remove rdf-ext

## 1.0.1

### Patch Changes

- d26107f: Remove .ts from package
- d26107f: Wrong exports `strict` instead of `loose`

## 1.0.0

### Major Changes

- f89152a: Change to ESM

### Patch Changes

- Updated dependencies [f89152a]
  - @hydrofoil/vocab-code@1.0.0
  - @hydrofoil/vocab-hex@1.0.0
  - @hydrofoil/vocab-hydra-box@1.0.0
  - @hydrofoil/vocab-hyper-auth@1.0.0
  - @hydrofoil/vocab-hyper-events@1.0.0
  - @hydrofoil/vocab-hyper-query@1.0.0
  - @hydrofoil/vocab-knossos@1.0.0
  - @hydrofoil/vocab-roadshow@1.0.0

## 0.3.4

### Patch Changes

- 6abf302: `vocabularies` export would not work in node using ES modules

## 0.3.3

### Patch Changes

- 94650d3: `knossos:describeStrategy` and `knossos:memberDescribeStrategy`

## 0.3.2

### Patch Changes

- 8ab023e: Added `knossos:beforeSend`, updated some `schema:rangeInclude`

## 0.3.1

### Patch Changes

- a2a1ff0: Added Hydra extensions Vocabulary

## 0.3.0

### Minor Changes

- ca6f7c9: - Remove `query:preprocess`
  - Add instead `knossos:preprocessResource`, `knossos:preprocessPayload` and `knossos:preprocessResponse`

## 0.2.4

### Patch Changes

- d353e58: Add `knossos:authorizationRule`

## 0.2.3

### Patch Changes

- 32f16a3: Added `knossos:Configuration` and `knossos:middlewre`

## 0.2.2

### Patch Changes

- 8e1d8ce: Added `hyper-query:include`

## 0.2.1

### Patch Changes

- e312242: Added `knossos:ownGraphOnly`

## 0.2.0

### Minor Changes

- 9d99ef2: Combine `supportedByClass` and `supportedByProperty` into a single property without ranges

## 0.1.8

### Patch Changes

- f5f0ba6: Added `supportedByProperty` property

## 0.1.7

### Patch Changes

- 4a9057c: Added `knossos:transformVariable`

## 0.1.6

### Patch Changes

- 19d4ac5: New prefixes: `hydra-box` and `code`

## 0.1.5

### Patch Changes

- 0426e99: Change `postinstall` to `prepare`

## 0.1.4

### Patch Changes

- f484ec8: Added `knossos:supportedByClass`

## 0.1.3

### Patch Changes

- 6356692: Missing terms now added for real

## 0.1.2

### Patch Changes

- 4807c07: Missing terms in `knossos#`, `events#` and `query#`

## 0.1.1

### Patch Changes

- a6b0bcf: Builders JS modules missing from package

## 0.1.0

### Minor Changes

- 12ed0c2: First version, with vocabularies `hyper-auth`, `hyper-events`, `hyper-query`, `knossos`, and `roadshow`
