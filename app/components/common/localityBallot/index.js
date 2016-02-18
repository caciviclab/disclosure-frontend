'use strict';

var localityBallot = angular.module('localityBallot', [])
  .controller('localityBallotController', require('./localityBallotController'))
  .directive('localityBallot', require('./localityBallotDirective'));

module.exports = localityBallot;
