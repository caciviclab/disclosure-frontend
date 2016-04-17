(function() {
  'use strict';

	require('../core/core');

  var pageHeaderBreadcrumbsDirective = require('./pageHeaderBreadcrumbsDirective');

  module.exports = angular.module('pageHeaderBreadcrumbsModule', [
  	'coreModules',
  	'ncy-angular-breadcrumb'
  	])
    .directive('pageHeaderBreadcrumbs', pageHeaderBreadcrumbsDirective);

})();
