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
var binary = require('binary-types')
  , read = binary.read
  , write = binary.write
```

### `yield* read[type]()`

  returns the decoded value.

### `write[type](value)`

  returns a buffer with the encoded value.

### endianness shortcuts

  to avoid repeating the endianness over and over:

```
> read.be.u16 === read.u16be
true
> read.le.u16 === read.u16le
true
> binary.le.read === read.le
true
> binary.be.write === write.be
true
```
