'use strict';

angular.module('odca.scroll_top', [])
  .run(function ($anchorScroll, $rootScope) {

    // Scroll to the top of page on route change
    $rootScope.$on('$routeChangeSuccess', function () {
      $anchorScroll('main');
    });
  });

module.exports = 'odca.scroll_top';
