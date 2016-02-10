/**
 * localityListingDirective.js
 *
 * Describe this locality.
 **/

'use strict';

function localityListingDirective() {
  return {
    controller: 'localityListingController',
    controllerAs: 'ctrl',
    restrict: 'E',
    scope: {
      ballot: '=?',
      disclosureSummary: '=',
      locality: '=',
      tabs: '=?',
      onSelect: '&'
    },
    template: require('./localityListing.html')
  };
}

module.exports = localityListingDirective;
