(function() {
  'use strict';

  /* Common Modules 'upcomingElectionsList' Depend on */
  var coreModules = require('../../../common/core/core');
  var linkList = require('../../../common/linkList/linkList');
  var angularFilter = require('angular-filter');  //from node_modules

  /* Components of 'upcomingElectionsList' */
  var upcomingElectionsListDirective = require('./upcomingElectionsListDirective');
  var UpcomingElectionsListController = require('./UpcomingElectionsListController');
  var upcomingElectionsListFactory = require('./upcomingElectionsListFactory');

  module.exports = angular.module('upcomingElectionsList',
    [
      'coreModules',
      'linkList',
      'angular.filter'
    ])
    .directive('localeUpcomingElectionsList', upcomingElectionsListDirective)
    .controller('UpcomingElectionsListController', UpcomingElectionsListController)
    .factory('upcomingElectionsListFactory', upcomingElectionsListFactory);

  })();
