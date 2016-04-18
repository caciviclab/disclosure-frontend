(function() {
  'use strict';
// Home View

  require('../common/core/core');
  require('../common/appMainNav/appMainNav');
  require('../common/appMainFooter/appMainFooter');
  require('./../common/globalSearchBar/globalSearchBar');
  
  var homePageDirective = require('./homePageDirective');
  var HomePageController = require('./HomePageController');
  var TestFactory1 = require('../appMainModule/examplePage1Module/testService1');

  module.exports = angular.module('homePageModule',
    [
      'coreModules',
      'appMainNavModule',
      'globalSearchBar',
      'appMainFooterModule'
    ])
      .directive('homePage', homePageDirective)
      .controller('HomePageController', HomePageController)
      .factory('TestFactory1', TestFactory1);

})();
