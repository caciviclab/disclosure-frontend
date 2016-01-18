/**
 * measureCommitteeListDirective.js
 *
 * Describe the committees supporting/opposing a ballot measure.
 **/

'use strict';

function measureCommitteeListDirective() {
  return {
    restrict: 'E',
    scope: {
      committees: '='
    },
    template: require('./measureCommitteeList.html')
  };
}

module.exports = measureCommitteeListDirective;
