'use strict';

require('../textBlurb/textBlurb');
require('../moneyOriginChart/moneyOriginChart');

var measureListing = angular.module('measureListing', ['textBlurbModule', 'odcaMoneyOriginChartModule'])
  .directive('measureListing', require('./measureListingDirective'));

module.exports = measureListing;
