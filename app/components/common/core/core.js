(function() {
  'use strict';

  require('../../../vendor/vendor');
  require('../../services/disclosure');

  angular.module('coreModules', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ui.router',
      'ct.ui.router.extras',
      'ui.bootstrap',
      'disclosure',
      'agGrid'
    ]);
})();
