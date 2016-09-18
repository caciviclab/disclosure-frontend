'use strict';

var angular = require('angular');

angular.module('scroll_top', [])
  .run(function ($anchorScroll, $rootScope) {

    // Scroll to the top of page on route change
    $rootScope.$on('$routeChangeSuccess', function () {
      $anchorScroll('main');
    });
  });

module.exports = 'scroll_top';
