(function() {
  'use strict';

  var aboutPageModule = require('./aboutPageModule/aboutPage');
  var faqPageModule = require('./faqPageModule/faqPage');

  var appMainDirective = require('./appMainDirective');
  var AppMainController = require('./AppMainController');

  module.exports = angular.module('appMainModule',
    [
      'aboutPageModule',
      'faqPageModule'
    ])
    .directive('appMain', appMainDirective)
    .controller('AppMainController', AppMainController);

})();