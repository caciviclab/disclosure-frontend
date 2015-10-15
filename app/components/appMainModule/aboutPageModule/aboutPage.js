(function() {
  'use strict';
  //About Page
  //INSTRUCTIONS: Add content for the 'About' page directly into 'aboutPage.html'.

  //var aboutPageModule = require('./aboutPage');
  var aboutPageDirective = require('./aboutPageDirective');
  var AboutPageController = require('./AboutPageController');

  module.exports = angular.module('aboutPageModule', [])
    .directive('aboutPage', aboutPageDirective)
    .controller('AboutPageController', AboutPageController);

})();