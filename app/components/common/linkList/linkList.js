(function(){
  'use strict';

  var linkListDirective = require('./linkListDirective');

  module.exports = angular.module('cfaLinkListModule', [])
    .directive('cfaLinkList', linkListDirective);

})();