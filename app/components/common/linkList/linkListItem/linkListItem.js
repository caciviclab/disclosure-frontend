(function(){
  'use strict';

  var linkListItemDirective = require('./linkListItemDirective');

  module.exports = angular.module('linkListItem', [])
    .directive('odcaLinkListItem', linkListItemDirective);

})();