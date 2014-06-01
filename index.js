'use strict';
var binary = exports
  , read = require('./read')
  , write = require('./write')

binary.read = read
binary.write = write
binary.le = { read: read.le, write: write.le }
binary.be = { read: read.be, write: write.be }
