(function(){
  'use strict';

  var linkListDirective = require('./linkListDirective');

  module.exports = angular.module('linkList', [])
    .directive('odcaLinkList', linkListDirective);

})();