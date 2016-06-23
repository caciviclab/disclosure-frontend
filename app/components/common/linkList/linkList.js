(function(){
  'use strict';

  var linkListItem = require('./linkListItem/linkListItem');

  var linkListDirective = require('./linkListDirective');

  module.exports = angular.module('linkList', ['linkListItem'])
    .directive('odcaLinkList', linkListDirective);

})();