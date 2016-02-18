'use strict';

require('../../common/localityBallot');
require('../../common/localityListing');
require('../../common/localityMoney');

var localityPageModule = angular.module('localityPageModule', [
  'localityBallot',
  'localityListing',
  'localityMoney'
])
  .controller('localityPageController', require('./localityPageController'))
  .controller('localityBallotPageController', require('./localityBallotPageController'))
  .config(require('./state'));

module.exports = localityPageModule;
