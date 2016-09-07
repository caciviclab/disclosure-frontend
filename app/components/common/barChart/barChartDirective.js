/**
 * barChartDirective.js
 *
 * A standard bar chart
 **/
(function() {
  'use strict';
  
  barChartDirective.$inject = ['$window'];
  function barChartDirective($window) {
    var directive = {
      restrict: 'E',
      scope: {
        label: '@',
        value: '@',
      },
      controller: function() {},
      controllerAs: 'odcaBarChart',
      bindToController: true,
      template: require('./barChart.html')
    };

    return directive;
    //////////////////////////////

  }

  module.exports = barChartDirective;

})();
