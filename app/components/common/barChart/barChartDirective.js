/**
 * barChartDirective.js
 *
 * A standard bar chart
 **/
(function() {
  'use strict';

  function barChartDirective() {
    var directive = {
      restrict: 'E',
      scope: {},
      bindToController: {
        label: '@',
        value: '@',
      },
      controller: function() {},
      controllerAs: 'odcaBarChart',
      template: require('./barChart.html')
    };

    return directive;
    //////////////////////////////

  }

  module.exports = barChartDirective;

})();
