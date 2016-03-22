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

  require('../../common/committeeContributors');
  require('../../common/committeeListing');

  // var committeeModule = angular.module('committeePageModule', [
  module.exports = angular.module('committeePageModule',
    [
      'committeeContributors',
      'committeeListing'
    ])
    .controller('committeePageController', require('./committeePageController'))
    .controller('committeeContributorsPageController', require('./committeeContributorsPageController'))
    .config(require('./committeePageRoutes'));

  // module.exports = committeeModule;
}());
