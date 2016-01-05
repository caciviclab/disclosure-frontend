'use strict';

require('./localityBallot');
require('./localityListing');
require('./localityMoney');

var localityPageModule = angular.module('localityPageModule', [
  'localityBallot',
  'localityListing',
  'localityMoney'
])
  .controller('localityPageController', require('./localityPageController'))
  .controller('localityBallotPageController', require('./localityBallotPageController'))
  .config(require('./state'));

module.exports = localityPageModule;
