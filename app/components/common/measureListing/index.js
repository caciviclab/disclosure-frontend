'use strict';

require('../textBlurb/textBlurb');

var measureListing = angular.module('measureListing', ['textBlurbModule'])
  .directive('measureListing', require('./measureListingDirective'));

module.exports = measureListing;
