'use strict';

var localityBallot = angular.module('localityBallot', [])
  .directive('localityBallot', require('./localityBallotDirective'))
  .controller('localityBallotController', require('./localityBallotController'));

module.exports = localityBallot;
