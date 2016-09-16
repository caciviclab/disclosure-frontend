// This config file does not define any routes.
// For module-level route definitions, use the *Routes.js files found in the module folders.

'use strict';

function appConfig($urlRouterProvider, $locationProvider, $breadcrumbProvider, $stickyStateProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  // For route debugging, using ui-router-extras
  $stickyStateProvider.enableDebug(true);

  $breadcrumbProvider.setOptions({
    prefixStateName: 'home',
    template: 'bootstrap3'
  });
}

appConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$breadcrumbProvider', '$stickyStateProvider'];
module.exports = appConfig;
