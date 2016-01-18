'use strict';

//require('../common/campaignFinanceApp/campaignFinanceApp');
var campaignFinanceAppDirective = require('./components/common/campaignFinanceApp/campaignFinanceAppDirective');

require('./components/services/disclosure');
require('./components/common/appMainNav/appMainNav');
require('./components/common/appMainFooter/appMainFooter');
require('./components/common/pageHeaderBreadcrumbs/pageHeaderBreadcrumbs');

require('./components/components');

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
    .run(require('./app-init'))
    .directive('campaignFinanceApp', campaignFinanceAppDirective);
