'use strict';
try { //jshint evil:true
  void new Function('return function*(){yield 1}')
  module.exports = require('./index.es6')
}
catch (e) {
  module.exports = require('./index.es5')
}
