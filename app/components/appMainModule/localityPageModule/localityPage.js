(function() {
'use strict';

  require('../../common/core/core');
  require('../../common/pageHeaderBreadcrumbs/pageHeaderBreadcrumbs');
  require('../../common/localityBallot/localityBallot');
  require('../../common/localityListing');
  require('../../common/localityMoney');

  var localityPageModule = angular.module('localityPageModule', [
    'coreModules',
    'pageHeaderBreadcrumbsModule',
    'localityBallot',
    'localityListing',
    'localityMoney'
  ])
    .controller('localityPageController', require('./localityPageController'))
    .controller('localityBallotPageController', require('./localityBallotPageController'))
    .config(require('./localityPageRoutes'));

  module.exports = localityPageModule;
})();
