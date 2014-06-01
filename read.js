'use strict';
try { //jshint evil:true
  void new Function('return function*(){yield 1}')
  module.exports = require('./read.es6')
}
catch (e) {
  module.exports = require('./read.es5')
}
