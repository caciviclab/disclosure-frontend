'use strict';

require('angular-ui-bootstrap');

var localityListing = angular.module('localityListing', [
  'ui.bootstrap.tabs'
])
  .controller('localityListingController', require('./localityListingController'))
  .directive('localityListing', require('./localityListingDirective'));

module.exports = localityListing;
