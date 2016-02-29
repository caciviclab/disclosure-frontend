(function() {
  'use strict';

  //var blankGraphModule = require('./blankGraph');
  var blankGraphDirective = require('./blankGraphDirective');

  module.exports = angular.module('blankGraphModule', [])
    .directive('blankGraph', blankGraphDirective);

})();