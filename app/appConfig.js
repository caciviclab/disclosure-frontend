// This config file does not define any routes.
// For module-level route definitions, use the *Routes.js files found in the module folders.

'use strict';

function appConfig($urlRouterProvider, $locationProvider, $breadcrumbProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');

    $breadcrumbProvider.setOptions({
      prefixStateName: 'home',
      template: 'bootstrap3'
    });
}

appConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$breadcrumbProvider'];
module.exports = appConfig;
