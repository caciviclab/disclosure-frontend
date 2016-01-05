/**
 * committeeListingDirective.js
 *
 * Describe the committee details.
 **/

'use strict';

function committeeListingDirective() {
  return {
    restrict: 'E',
    scope: {
      committee: '='
    },
    template: require('./committeeListing.html')
  };
}

module.exports = committeeListingDirective;
