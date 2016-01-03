/**
 * contributionTypeBreakdown/index.js
 *
 * UI element breaking down campaign contributions by type.
 **/

'use strict';

var contributions = angular.module('contributionTypeBreakdown', [])
  .directive('contributionTypeBreakdown', function contributionTypeBreakdown() {
    return {
      controller: require('./controller'),
      controllerAs: 'ctrl',
      restrict: 'EA',
      scope: {
        contributionByType: '=contributionTypeBreakdown'
      },
      template: require('./contributions.html')
    };
  });

module.exports = contributions;
