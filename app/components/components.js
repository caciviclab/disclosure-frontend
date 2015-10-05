(function() {
  'use strict';

  require('./homePageModule/homePage');
  require('./appMainModule/appMain');
  require('./examplePage1/examplePage1');

  module.exports = angular.module('components',
      [
        'homePageModule',
        'appMainModule',
        'examplePage1Module'
      ]);
      //.controller('MainCtrl', require('./MainController'));
})();



//TODO: (1) CREATE appMain in 'common'
// (2): move appMainHeader and appMainFooter into directory 'appMain'