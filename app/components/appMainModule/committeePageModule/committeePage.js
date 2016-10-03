(function(){
  'use strict';

 /**
  * committeePageModule/committeePage.js
  *
  * @ngdoc overview
  * @module committeePageModule
  * @name committeePageModule
  * @description The committee module contains several pages containing information on a
  * single campaign committee.
  *
  * @scope
  * @restrict E
  *
  */

  require('../../common/core/core');
  require('../../common/pageHeader/pageHeader');
  require('../../common/pageHeaderBreadcrumbs/pageHeaderBreadcrumbs');
  

  //TODO: remove these from common and add in directives
  require('../../common/committeeContributors');
  require('../../common/committeeListing');

  // var committeeModule = angular.module('committeePageModule', [
  module.exports = angular.module('committeePageModule',
    [
      'coreModules',
      'pageHeaderModule',
      'pageHeaderBreadcrumbsModule',
      'committeeContributors',
      'committeeListing'
    ])
    .controller('committeePageController', require('./committeePageController'))
    .controller('committeeContributorsPageController', require('./committeeContributorsPageController'))
    .config(require('./committeePageRoutes'));

  // module.exports = committeeModule;
}());
