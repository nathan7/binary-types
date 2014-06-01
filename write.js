'use strict';
var write = exports

write.u8    = function(value) { var buf = new Buffer(1); buf.writeUInt8   (value, 0, true); return buf }
write.u16le = function(value) { var buf = new Buffer(2); buf.writeUInt16LE(value, 0, true); return buf }
write.u16be = function(value) { var buf = new Buffer(2); buf.writeUInt16BE(value, 0, true); return buf }
write.u32le = function(value) { var buf = new Buffer(4); buf.writeUInt32LE(value, 0, true); return buf }
write.u32be = function(value) { var buf = new Buffer(4); buf.writeUInt32BE(value, 0, true); return buf }

write.i8    = function(value) { var buf = new Buffer(1); buf.writeInt8   (value, 0, true); return buf }
write.i16le = function(value) { var buf = new Buffer(2); buf.writeInt16LE(value, 0, true); return buf }
write.i16be = function(value) { var buf = new Buffer(2); buf.writeInt16BE(value, 0, true); return buf }
write.i32le = function(value) { var buf = new Buffer(4); buf.writeInt32LE(value, 0, true); return buf }
write.i32be = function(value) { var buf = new Buffer(4); buf.writeInt32BE(value, 0, true); return buf }

write.f32le = function(value) { var buf = new Buffer(4); buf.writeFloatLE(value, 0, true); return buf }
write.f32be = function(value) { var buf = new Buffer(4); buf.writeFloatBE(value, 0, true); return buf }

write.f64le = function(value) { var buf = new Buffer(8); buf.writeDoubleLE(value, 0, true); return buf }
write.f64be = function(value) { var buf = new Buffer(8); buf.writeDoubleBE(value, 0, true); return buf }

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
