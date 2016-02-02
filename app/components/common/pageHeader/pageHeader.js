(function() {
  'use strict';

  //var pageHeaderModule = require('./pageHeader');
  var pageHeaderDirective = require('./pageHeaderDirective');

  module.exports = angular.module('pageHeaderModule', [])
    .directive('pageHeader', pageHeaderDirective);

})();