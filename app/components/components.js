(function() {
  'use strict';

  require('./homePageModule/homePage');
  require('./appMainModule/appMain');

  module.exports = angular.module('components',
      [
        'homePageModule',
        'appMainModule'
      ]);
      //.controller('MainCtrl', require('./MainController'));
})();
