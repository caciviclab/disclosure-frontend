(function() {
  'use strict';

  var pageHeaderBreadcrumbsDirective = require('./pageHeaderBreadcrumbsDirective');

  module.exports = angular.module('pageHeaderBreadcrumbsModule', ['ui.router', 'ui.bootstrap', 'ncy-angular-breadcrumb'])
    .directive('pageHeaderBreadcrumbs', pageHeaderBreadcrumbsDirective);

})();
