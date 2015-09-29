(function() {
  'use strict';

  var appMainDirective = require('./appMainDirective');
  var AppMainController = require('./AppMainController');

  module.exports = angular.module('appMainModule', [])
    .directive('appMain', appMainDirective)
    .controller('AppMainController', AppMainController);

})();