/**
 * measureListingDirective.js
 *
 * Describe the ballot measure with details like name, number, and text.
 **/

'use strict';

function measureListingDirective() {
  return {
    restrict: 'E',
    scope: {
      measure: '='
    },
    template: require('./measureListing.html')
  };
}

module.exports = measureListingDirective;
