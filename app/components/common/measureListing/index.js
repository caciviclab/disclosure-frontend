'use strict';

require('../textBlurb/textBlurb');
require('../moneyOriginChart/moneyOriginChart');

var measureListing = angular.module('measureListing', ['textBlurbModule', 'moneyOriginChartModule'])
  .directive('measureListing', require('./measureListingDirective'));

module.exports = measureListing;
