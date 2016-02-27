(function() {
  'use strict';

  var ExamplePage1Factory = require('./ExamplePage1Factory');
  var examplePage1Directive = require('./examplePage1Directive');
  var ExamplePage1Controller = require('./ExamplePage1Controller');

  module.exports = angular.module('examplePage1Module', [])
    .directive('examplePage1', examplePage1Directive)
    .controller('ExamplePage1Controller', ExamplePage1Controller)
    .factory('ExamplePage1Factory', ExamplePage1Factory);

})();
