(function() {
  'use strict';
  // Home View

  require('../common/core/core');

  require('../common/appMainNav/appMainNav');
  require('../common/appMainFooter/appMainFooter');

  var homePageDirective = require('./homePageDirective');
  var HomePageController = require('./HomePageController');

  module.exports = angular.module('homePageModule',
    [
      'coreModules',
      'appMainNavModule',
      'appMainFooterModule'
    ])
      .directive('homePage', homePageDirective)
      .controller('HomePageController', HomePageController);

})();
