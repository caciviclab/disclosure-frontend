'use strict';

var localityListing = angular.module('localityListing', [])
  .controller('localityListingController', require('./localityListingController'))
  .directive('localityListing', require('./localityListingDirective'));

module.exports = localityListing;
