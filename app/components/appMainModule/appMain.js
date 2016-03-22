(function() {
'use strict';

  /* Common Modules */
  require('../common/core/core');
  require('../common/appMainNav/appMainNav');
  require('../common/appMainFooter/appMainFooter');
  require('../common/pageHeaderBreadcrumbs/pageHeaderBreadcrumbs');

  /* AppMain Modules */
  require('./aboutPageModule/aboutPage');
  require('./committeePageModule/committeePage');
  require('./examplePage1Module/examplePage1');
  require('./faqPageModule/faqPage');
  require('./localityPageModule/localityPage');
  require('./measurePageModule');
  require('./cityPageModule/cityPage');

  /* Components of AppMain */
  var appMainRoutes = require('./appMainRoutes');
  var appMainDirective = require('./appMainDirective');
  var AppMainController = require('./AppMainController');

  module.exports = angular.module('appMainModule',
    [
      'coreModules',
      'appMainNavModule',
      'appMainFooterModule',
      'pageHeaderBreadcrumbsModule',
      'examplePage1Module',
      'aboutPageModule',
      'committeePageModule',
      'faqPageModule',
      'localityPageModule',
      'measurePageModule'
    ])
    .config(appMainRoutes)
    .directive('appMain', appMainDirective)
    .controller('AppMainController', AppMainController);

})();
