# binary-types

  helpers for binary-parser

## Installation

    npm install binary-types

## Types

 * u8
 * u16le
 * u16be
 * u32le
 * u32be
 * f32le
 * f32be
 * f64le
 * f64be

## Examples

```js
'use strict'
var binary = require('binary-types')
  , read = binary.read
  , write = binary.write

exports.parse = require('binary-parser')(function* parser() {
  var value = yield* read.u8()
  return value
})

exports.bufferify = function(str) {
  var buf = Buffer(str.length)
  if (buf.length > 0xFF) throw new Error('too long')
  return Buffer.concat(write.u8(buf.length), buf)
}
```

## API
```js
var binary = exports
  , read = require('./read')
  , write = require('./write')

binary.read = read
binary.write = write
```

### `yield* read[type]()`

  returns the decoded value.

### `write[type](value)`

  returns a buffer with the encoded value.

### endianness shortcuts

  to avoid repeating the endianness over and over.

```js
binary.le = { read: read.le, write: write.le }
binary.be = { read: read.be, write: write.be }
```

#### read

```js
read.le =
  { __proto__: read
  , u16: read.u16le
  , u32: read.u32le
  , f32: read.f32le
  , f64: read.f64le
  }

read.be =
  { __proto__: read
  , u16: read.u16be
  , u32: read.u32be
  , f32: read.f32be
  , f64: read.f64be
  }
```

#### write

```js
write.le =
  { __proto__: write
  , u16: write.u16le
  , u32: write.u32le
  , f32: write.f32le
  , f64: write.f64le
  }

write.be =
  { __proto__: write
  , u16: write.u16be
  , u32: write.u32be
  , f32: write.f32be
  , f64: write.f64be
  }
```
