/**
 * localityBallotDirective.js
 *
 * Describe the ballot for this locality.
 **/

'use strict';

function localityBallotDirective() {
  return {
    restrict: 'E',
    scope: {
      ballot: '='
    },
    template: require('./localityBallot.html')
  };
}

module.exports = localityBallotDirective;
