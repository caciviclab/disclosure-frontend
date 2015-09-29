(function() {
  'use strict';

  var template = require('./appMain.html');

  module.exports = function appMain() {
    return {
      controller: 'AppMainController', // Called from AppMainController.js
      controllerAs: 'ctrl',
      bindToController: true,
      restrict: 'EA',
      scope: true,
      template: template
    };
  };
})();