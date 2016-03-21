(function() {
  'use strict';

  require('../../services/disclosure');

  //module.exports = angular.module('common.core', [
  module.exports = angular.module('coreModules', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ui.router',
      'ui.bootstrap',
      'disclosure'
    ]);
    // .constant('CONSTANTS', appConstants)
})();