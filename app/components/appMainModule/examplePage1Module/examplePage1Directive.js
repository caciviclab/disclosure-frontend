(function() {
  'use strict';

  var template = require('./examplePage1.html');

  module.exports = function examplePage1() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'example',
      bindToController: {},
      // link: link,
      template: template,
      controller: 'ExamplePage1Controller'
    };
    return directive;

    // function link(scope, element, attrs, example) {}
  };
})();
