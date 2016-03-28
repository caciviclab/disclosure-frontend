(function() {
  'use strict';

//  require('angular');

  //var globalSearchBarModule = require('./globalSearchBar');
  var globalSearchBarDirective = require('./globalSearchBarDirective');
  var GlobalSearchBarController = require('./GlobalSearchBarController');

  module.exports = angular.module('globalSearchBar',
    [
      'ngSanitize',
      'ui.bootstrap.typeahead'
    ])
    .directive('globalSearchBar', globalSearchBarDirective)
    .controller('GlobalSearchBarController', GlobalSearchBarController)

})();
