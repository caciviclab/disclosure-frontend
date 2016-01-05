/**
 * contributionAreaBreakdown/index.js
 *
 * UI element breaking down campaign contributions by area.
 **/

'use strict';

var contributionAreaBreakdown = angular.module('contributionAreaBreakdown', [])
  .directive('contributionAreaBreakdown', function contributionAreaBreakdown() {
    return {
      controller: require('./controller'),
      controllerAs: 'ctrl',
      restrict: 'EA',
      scope: {
        contributionByArea: '=contributionAreaBreakdown',
        location: '=location'
      },
      template: require('./contributions.html')
    };
  });

module.exports = contributionAreaBreakdown;
