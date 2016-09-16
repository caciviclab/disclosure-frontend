(function() {
  'use strict';
  
  odcaMoneyOriginChart.$inject = [];
  function odcaMoneyOriginChart() {
    var directive = {
      restrict: 'E',
      scope: {
        measureSide: '@',
        geos: '='
        // value: '@',
      },
      // controller: function() {},
      // controllerAs: 'moneyOriginChart',
      // bindToController: true,
      template: require('./moneyOriginChart.html')
    };

    return directive;
    //////////////////////////////

  }

  module.exports = odcaMoneyOriginChart;

})();
