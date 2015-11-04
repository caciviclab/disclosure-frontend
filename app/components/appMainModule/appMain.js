(function() {
  'use strict';

  var examplePage1Module = require('./examplePage1Module/examplePage1');
  var aboutPageModule = require('./aboutPageModule/aboutPage');
  var faqPageModule = require('./faqPageModule/faqPage');

  var appMainDirective = require('./appMainDirective');
  var AppMainController = require('./AppMainController');

  module.exports = angular.module('appMainModule',
    [
      'examplePage1Module',
      'aboutPageModule',
      'faqPageModule'
    ])
    .directive('appMain', appMainDirective)
    .controller('AppMainController', AppMainController);

})();
