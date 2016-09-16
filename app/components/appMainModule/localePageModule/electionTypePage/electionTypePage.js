(function() {
  'use strict';

  /* Common Modules 'electionTypePage' Depends on */
  var coreModules = require('../../../common/core/core');

  /* 'electionTypePage' Module Dependencies */
  var officePageModule = require('./officePageModule/officePage');
  var referendumPageModule = require('./referendumPageModule/referendumPage');

  /* Components of 'electionTypePage' */
  var electionTypePageRoutes = require('./electionTypePageRoutes');
  var electionTypePageDirective = require('./electionTypePageDirective');
  var ElectionTypePageController = require('./ElectionTypePageController');

  module.exports = angular.module('electionTypePage',
    [
      'coreModules',
      'officePageModule',
      'referendumPageModule'
    ])
    .config(electionTypePageRoutes)
    .directive('localeElectionPage', electionTypePageDirective)
    .controller('ElectionTypePageController', ElectionTypePageController);

})();