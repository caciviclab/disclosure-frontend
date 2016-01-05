'use strict';

require('../../../common/contributionAreaBreakdown');
require('../../../common/contributionTypeBreakdown');

var localityMoney = angular.module('localityMoney', [
  'contributionAreaBreakdown',
  'contributionTypeBreakdown'
])
  .directive('localityMoney', require('./localityMoneyDirective'));

module.exports = localityMoney;
