'use strict';

require('./aboutPageModule/aboutPage');
require('./committeePageModule');
require('./examplePage1Module/examplePage1');
require('./faqPageModule/faqPage');
require('./localityPageModule');
require('./measurePageModule');

module.exports = angular.module('appMainModule',
  [
    'pageHeaderBreadcrumbsModule',
    'examplePage1Module',
    'aboutPageModule',
    'committeePageModule',
    'faqPageModule',
    'localityPageModule',
    'measurePageModule'
  ])
  .directive('appMain', require('./appMainDirective'))
  .controller('AppMainController', require('./AppMainController'));
