'use strict';
var read = exports

read.u8    = function*() { return (yield 1).readUInt8   (0, true) }
read.u16le = function*() { return (yield 2).readUInt16LE(0, true) }
read.u16be = function*() { return (yield 2).readUInt16BE(0, true) }
read.u32le = function*() { return (yield 4).readUInt32LE(0, true) }
read.u32be = function*() { return (yield 4).readUInt32BE(0, true) }

read.i8    = function*() { return (yield 1).readInt8   (0, true) }
read.i16le = function*() { return (yield 2).readInt16LE(0, true) }
read.i16be = function*() { return (yield 2).readInt16BE(0, true) }
read.i32le = function*() { return (yield 4).readInt32LE(0, true) }
read.i32be = function*() { return (yield 4).readInt32BE(0, true) }

read.le =
  { __proto__: read
  , u16: read.u16le
  , u32: read.u32le
  }

read.be =
  { __proto__: read
  , u16: read.u16be
  , u32: read.u32be
  }
