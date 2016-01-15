/**
 * measureCommitteeSupportingDirective.js
 *
 * Describe the committees supporting the ballot measure.
 **/

'use strict';

function measureCommitteeSupportingDirective() {
  return {
    restrict: 'E',
    scope: {
      supporters: '='
    },
    template: require('./measureCommitteeSupporting.html')
  };
}

module.exports = measureCommitteeSupportingDirective;
