(function() {
  'use strict';
// Home View

  //var homePageModule = require('./homePage');
  var homePageDirective = require('./homePageDirective');
  var HomePageController = require('./HomePageController');

  module.exports = angular.module('homePageModule',
    [
      'appMainNavModule',
      'appMainFooterModule', 
      'apiModule'
    ])
      .directive('homePage', homePageDirective)
      .controller('HomePageController', HomePageController);

})();