(function() {
  'use strict';

  /* Common Modules 'electionTypePage' Depends on */
  var coreModules = require('../../../common/core/core');

  /* 'electionTypePage' Module Dependencies */
  var officePageModule = require('./officePageModule/officePage');
  var referendumPageModule = require('./referendumPageModule/referendumPage');
  var candidatePageModule = require('./candidatePageModule/candidatePage');

  /* Components of 'electionTypePage' */
  var electionTypePageRoutes = require('./electionTypePageRoutes');
  var electionTypePageDirective = require('./electionTypePageDirective');
  var ElectionTypePageController = require('./ElectionTypePageController');

  module.exports = angular.module('electionTypePage',
    [
      require('../../../common/referendum'),
      'coreModules',
      'officePageModule',
      'referendumPageModule',
      'candidatePageModule'
    ])
    .config(electionTypePageRoutes)
    .directive('localeElectionPage', electionTypePageDirective)
    .controller('ElectionTypePageController', ElectionTypePageController);

})();
