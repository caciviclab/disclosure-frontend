'use strict';

var moneyOriginChart = angular.module('moneyOriginChartModule', [])
  .directive('moneyOriginChart', require('./moneyOriginChartDirective'));

module.exports = moneyOriginChart;
