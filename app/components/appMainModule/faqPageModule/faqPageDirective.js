(function() {
  'use strict';

  var template = require('./faqPage.html');

  module.exports = function faqPage() {
    return {
      controller: 'FaqPageController',
      restrict: 'E',
      scope: {},
      bindToController: true,
      controllerAs: '$ctrl',
      template: template
    };
  };
})();
