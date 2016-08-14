(function() {
  'use strict';

  /* Common Modules 'localePageModule' Depend on */
  require('../../common/core/core');
  require('../../common/pageHeaderBreadcrumbs/pageHeaderBreadcrumbs');
  require('../../common/pageHeader/pageHeader');
  require('./upcomingElectionsList/upcomingElectionsList');

  /* Components of 'localePageModule' */
  var localePageRoutes = require('./localePageRoutes');
  var localePageDirective = require('./localePageDirective');
  var LocalePageController = require('./LocalePageController');
  var localePageFactory = require('./localePageFactory');

  module.exports = angular.module('localePageModule',
    [
      'coreModules',
      'pageHeaderBreadcrumbsModule',
      'pageHeaderModule',
      'upcomingElectionsList'
    ])
    .config(localePageRoutes)
    .directive('localePage', localePageDirective)
    .controller('LocalePageController', LocalePageController)
    .factory('localePageFactory', localePageFactory);

})();
