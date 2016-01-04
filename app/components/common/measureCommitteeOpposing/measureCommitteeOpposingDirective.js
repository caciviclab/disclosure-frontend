/**
 * measureCommitteeOpposingDirective.js
 *
 * Describe the committees opposing the ballot measure.
 **/

'use strict';

function measureCommitteeOpposingDirective() {
  return {
    restrict: 'E',
    scope: {
      opposers: '='
    },
    template: require('./measureCommitteeOpposing.html')
  };
}

module.exports = measureCommitteeOpposingDirective;
