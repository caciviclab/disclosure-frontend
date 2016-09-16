'use strict';

var odcaMoneyOriginChart = angular.module('odcaMoneyOriginChartModule', [])
  .directive('odcaMoneyOriginChart', require('./moneyOriginChartDirective'));

module.exports = odcaMoneyOriginChart;
