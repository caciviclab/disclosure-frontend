(function() {
  'use strict';
  //About Page
  //INSTRUCTIONS: Add content for the 'About' page directly into 'aboutPage.html'.

  /* Common Modules 'aboutPageModule' Depend on */
  require('../../common/core/core');
  require('../../common/pageHeaderBreadcrumbs/pageHeaderBreadcrumbs');
  require('../../common/markdown');

  //var aboutPageModule = require('./aboutPage');
  var aboutPageDirective = require('./aboutPageDirective');
  var AboutPageController = require('./AboutPageController');

  module.exports = angular.module('aboutPageModule', [
    'coreModules',
    'odca.markdown',
    'pageHeaderBreadcrumbsModule'
  ])
    .directive('aboutPage', aboutPageDirective)
    .controller('AboutPageController', AboutPageController);

})();
