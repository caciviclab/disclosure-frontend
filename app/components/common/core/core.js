// (function() {
  'use strict';

  require('../../../vendor/vendor');
  require('../../services/disclosure');

  //module.exports = angular.module('common.core', [
  module.exports = angular.module('coreModules', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ui.router',
      'ct.ui.router.extras',
      'ui.bootstrap',
      'disclosure'
    ]);
    // .constant('CONSTANTS', appConstants)
// })();
