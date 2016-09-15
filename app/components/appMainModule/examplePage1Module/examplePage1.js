// (function() {
  'use strict';

  /* Common Modules 'examplePage1Module' Depend on */
  require('../../common/core/core');
  require('../../common/pageHeaderBreadcrumbs/pageHeaderBreadcrumbs');
  require('../../common/pageHeader/pageHeader');
  require('../../common/linkList/linkList');
  require('../../common/contributionsCategoryTable/contributionsCategoryTable');
  require('../../common/barChart/barChart');

  /* Components of 'examplePage1Module' */
  var examplePage1Directive = require('./examplePage1Directive');
  var ExamplePage1Controller = require('./ExamplePage1Controller');
  var TestFactory1 = require('./testService1');
  var examplePage1Factory = require('./examplePage1Factory');

  module.exports = angular.module('examplePage1Module',
    [
      'barChartModule',
      'coreModules',
      'pageHeaderBreadcrumbsModule',
      'pageHeaderModule',
      'linkList',
      'contributionsCategoryTable'
    ])
    .directive('examplePage1', examplePage1Directive)
    .controller('ExamplePage1Controller', ExamplePage1Controller)
    .factory('TestFactory1', TestFactory1)
    .factory('examplePage1Factory', examplePage1Factory);

// })();
