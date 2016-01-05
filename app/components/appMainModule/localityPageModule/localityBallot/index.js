'use strict';

var localityBallot = angular.module('localityBallot', [])
  .directive('localityBallot', require('./localityBallotDirective'));

module.exports = localityBallot;
