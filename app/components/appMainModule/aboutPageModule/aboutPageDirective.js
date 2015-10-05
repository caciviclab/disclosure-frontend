(function() {
  'use strict';

  var template = require('./aboutPage.html');

  module.exports = function aboutPage() {
    return {
      controller: 'AboutPageController',
      restrict: 'E',
      scope: true,
      //replace: true,
      template: template
    };
  };
})();