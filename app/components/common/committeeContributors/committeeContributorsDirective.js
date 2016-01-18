/**
 * committeeContributorsDirective.js
 *
 * Describe the contributors of a political committee.
 **/

'use strict';

function committeeContributorsDirective() {
  return {
    restrict: 'E',
    scope: {
      contributors: '='
    },
    template: require('./committeeContributors.html')
  };
}

module.exports = committeeContributorsDirective;
