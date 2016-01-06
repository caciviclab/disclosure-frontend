/**
 * localityBallotDirective.js
 *
 * Describe the ballot for this locality.
 **/

'use strict';

function localityBallotDirective() {
  return {
    controller: 'localityBallotController',
    controllerAs: 'ctrl',
    restrict: 'E',
    scope: {
      ballot: '='
    },
    template: require('./localityBallot.html')
  };
}

module.exports = localityBallotDirective;
