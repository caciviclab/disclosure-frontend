'use strict';

require('../../common/core/core');
require('../../common/pageHeaderBreadcrumbs/pageHeaderBreadcrumbs');
require('../../common/markdown');

var faqPageDirective = require('./faqPageDirective');
var FaqPageController = require('./FaqPageController');

module.exports = angular.module('faqPageModule', [
  'coreModules',
  'odca.markdown',
  'pageHeaderBreadcrumbsModule'
])
  .directive('faqPage', faqPageDirective)
  .controller('FaqPageController', FaqPageController);
