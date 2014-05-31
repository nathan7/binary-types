# binary-types

  helpers for binary-parser

## Installation

    npm install binary-types

## API

```js
'use strict'
module.exports = require('binary-parser')(parser)
var read = require('binary-types')

function* parser() {
  var value = yield* read.u8()
  return value
}
```

### u8
### u16le
### u16be
### u32le
### u32be

  what it says on the tin.

### le

```js
read.le =
  { __proto__: read
  , u16: read.u16le
  , u32: read.u32le
  }
```

### be

```js
read.be =
  { __proto__: read
  , u16: read.u16be
  , u32: read.u32be
  }
```

