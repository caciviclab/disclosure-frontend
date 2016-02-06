(function() {
  'use strict';

  var template = require('./blankGraph.html');

  module.exports = function blankGraph() {
    var directive = {
      restrict: 'EA',
      scope: {},
      controllerAs: 'vm',
      link: link,
      bindToController: {
        graphTitle: '@title'
      },
      transclude: true,
      template: template,
      //controller: 'blankGraphController'
      controller: function() {}
    };
    return directive;

    function link(scope, element, attrs, vm, transclude) {
      element.find('.cfa-blankGraph-content').append(transclude());
    }
  };
})();
