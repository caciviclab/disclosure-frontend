(function() {
  'use strict';

  //require('ui.select');
//  require('angular');
  //require('../../node_modules/ng-ui-select/dist/select');

  //var globalSearchBarModule = require('./globalSearchBar');
  var globalSearchBarDirective = require('./globalSearchBarDirective');
  var GlobalSearchBarController = require('./GlobalSearchBarController');

  module.exports = angular.module('globalSearchBar',
    [
      'ngSanitize',
      'ui.select'
    ])
    .directive('globalSearchBar', globalSearchBarDirective)
    .controller('GlobalSearchBarController', GlobalSearchBarController)
    .filter('propsFilter', function() {
      return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
          items.forEach(function(item) {
            var itemMatches = false;

            var keys = Object.keys(props);
            for (var i = 0; i < keys.length; i++) {
              var prop = keys[i];
              var text = props[prop].toLowerCase();
              if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                itemMatches = true;
                break;
              }
            }

            if (itemMatches) {
              out.push(item);
            }
          });
        } else {
          // Let the output be the input untouched
          out = items;
        }

        return out;
      };
    });


})();
