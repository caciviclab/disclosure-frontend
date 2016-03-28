(function() {
  'use strict';

//  require('angular');

  //var globalSearchBarModule = require('./globalSearchBar');
  var globalSearchBarDirective = require('./globalSearchBarDirective');
  var GlobalSearchBarController = require('./GlobalSearchBarController');
  var globalSearchFactory = require('./globalSearchFactory');

  module.exports = angular.module('globalSearchBar',
    [
      'ngSanitize',
      'ui.bootstrap.typeahead'
    ])
    .directive('odcaGlobalSearchBar', globalSearchBarDirective)
    .controller('GlobalSearchBarController', GlobalSearchBarController)
    .factory('globalSearchFactory', globalSearchFactory);

})();
