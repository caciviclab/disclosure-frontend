(function() {
  'use strict';

  /* Common Modules 'electionTypePage' Depend on */
  var coreModules = require('../../../common/core/core');

  var electionTypePageRoutes = require('./electionTypePageRoutes');
  var electionTypePageDirective = require('./electionTypePageDirective');
  var ElectionTypePageController = require('./ElectionTypePageController');

  module.exports = angular.module('electionTypePage', ['coreModules'])
    .config(electionTypePageRoutes)
    .directive('localeElectionPage', electionTypePageDirective)
    .controller('ElectionTypePageController', ElectionTypePageController);

})();