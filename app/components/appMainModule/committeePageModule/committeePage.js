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
  require('../../common/committeeListing');

  // var committeeModule = angular.module('committeePageModule', [
  module.exports = angular.module('committeePageModule',
    [
      'coreModules',
      'pageHeaderModule',
      'pageHeaderBreadcrumbsModule',
      'committeeListing'
    ])
    .controller('committeePageController', require('./committeePageController'))
    .config(require('./committeePageRoutes'));

  // module.exports = committeeModule;
}());
