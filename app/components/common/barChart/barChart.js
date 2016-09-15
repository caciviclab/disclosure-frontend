'use strict';

var barChart = angular.module('barChartModule', [])
  .directive('odcaBarChart', require('./barChartDirective.js'));

module.exports = barChart;
