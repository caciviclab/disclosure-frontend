(function() {
  'use strict';

  /* Common Modules 'examplePage1Module' Depend on */
  require('../../common/core/core');

  /* Components of 'examplePage1Module' */
  var examplePage1Directive = require('./examplePage1Directive');
  var ExamplePage1Controller = require('./ExamplePage1Controller');
  var TestFactory1 = require('./testService1');
  var examplePage1Factory = require('./examplePage1Factory');

  module.exports = angular.module('examplePage1Module', ['coreModules'])
    .directive('examplePage1', examplePage1Directive)
    .controller('ExamplePage1Controller', ExamplePage1Controller)
    .factory('TestFactory1', TestFactory1)
    .factory('examplePage1Factory', examplePage1Factory);

})();
