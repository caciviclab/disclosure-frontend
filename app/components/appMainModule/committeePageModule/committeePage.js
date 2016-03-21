/**
 * committeePageModule/index.js
 *
 * The committee module contains several pages containing information on a
 * single campaign committee.
 **/

'use strict';

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
  .config(require('./state'));

// module.exports = committeeModule;
