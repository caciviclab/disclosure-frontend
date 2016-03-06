(function() {
  'use strict';
  // Home View

  //require('./../common/globalSearchBar/globalSearchBar');

  //var homePageModule = require('./homePage');
  var homePageDirective = require('./homePageDirective');
  var HomePageController = require('./HomePageController');

  module.exports = angular.module('homePageModule',
    [
      'appMainNavModule',
      'globalSearchBar',
      'appMainFooterModule'
    ])
      .directive('homePage', homePageDirective)
      .controller('HomePageController', HomePageController);

})();
