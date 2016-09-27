(function() {
  'use strict';

  var template = require('./aboutPage.html');

  module.exports = function aboutPage() {
    return {
      controller: 'AboutPageController',
      restrict: 'E',
      scope: {},
      bindToController: true,
      controllerAs: '$ctrl',
      template: template
    };
  };
})();
