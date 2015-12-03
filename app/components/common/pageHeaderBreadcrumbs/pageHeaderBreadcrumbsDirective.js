(function() {
  'use strict';

  var template = require('./pageHeaderBreadcrumbs.html');

  module.exports = function pageHeaderBreadcrumbs() {
    return {
      //controller: 'pageHeaderBreadcrumbsController', // Called from pageHeaderBreadcrumbsController.js
      //controllerAs: 'ctrl',
      //bindToController: true,
      restrict: 'EA',
      //scope: true,
      template: template
    };
  };
})();