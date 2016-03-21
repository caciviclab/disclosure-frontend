'use strict';

var appConstants = require('./appConstants');
require('./components/homePageModule/homePage');
require('./components/appMainModule/appMain');

var appDirective = require('./appDirective');

    'homePageModule',
    'appMainModule'
  .directive('campaignFinanceApp', appDirective);

module.exports = angular.module('campaignFinanceApp',
    [
      'ui.bootstrap',
      'ui.router',
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'restangular',
      'ncy-angular-breadcrumb',
      'components',
      'disclosure'
    ])
    .config(require('./appRoutes'))
    .config(require('./appConfig'))
    .constant('version', require('../package.json').version)
    .constant('CONSTANTS', appConstants)
    .run(require('./appInit'))
    .directive('campaignFinanceApp', campaignFinanceAppDirective);
