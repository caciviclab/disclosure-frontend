(function() {
  'use strict';
  // FAQ Page
  //INSTRUCTIONS: Add questions and answers for the faq page in the 'FaqPageController.js' file.  Angular will take care of rendering the questions in html.

  //var faqPageModule = require('./faqPage');
  var faqPageDirective = require('./faqPageDirective');
  var FaqPageController = require('./FaqPageController');

  module.exports = angular.module('faqPageModule', [])
    .directive('faqPage', faqPageDirective)
    .controller('FaqPageController', FaqPageController);

})();