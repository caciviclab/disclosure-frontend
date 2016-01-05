'use strict';

require('../contributionAreaBreakdown');
require('../contributionTypeBreakdown');

var localityMoney = angular.module('localityMoney', [
  'contributionAreaBreakdown',
  'contributionTypeBreakdown'
])
  .directive('localityMoney', require('./localityMoneyDirective'));

module.exports = localityMoney;
