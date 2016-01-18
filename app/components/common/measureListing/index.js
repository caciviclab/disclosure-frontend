'use strict';

var measureListing = angular.module('measureListing', [])
  .directive('measureListing', require('./measureListingDirective'));

module.exports = measureListing;
