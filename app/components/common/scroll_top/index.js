'use strict';

angular.module('odca.scroll_top', [])
  .run(['$anchorScroll', '$rootScope', function ($anchorScroll, $rootScope) {

    // Scroll to the top of page on route change
    $rootScope.$on('$stateChangeSuccess', function () {
      $anchorScroll('main');
    });
  }]);

module.exports = 'odca.scroll_top';
