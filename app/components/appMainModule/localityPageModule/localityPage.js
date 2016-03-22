(function() {
'use strict';

  require('../../common/core/core');
  require('../../common/localityBallot');
  require('../../common/localityListing');
  require('../../common/localityMoney');

  var localityPageModule = angular.module('localityPageModule', [
    'coreModules',
    'localityBallot',
    'localityListing',
    'localityMoney'
  ])
    .controller('localityPageController', require('./localityPageController'))
    .controller('localityBallotPageController', require('./localityBallotPageController'))
    .config(require('./localityPageRoutes'));

  module.exports = localityPageModule;
})();
