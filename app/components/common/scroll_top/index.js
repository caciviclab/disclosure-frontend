'use strict';

angular.module('odca.scroll_top', [])
  .run(['$anchorScroll', '$location', '$rootScope', function ($anchorScroll, $location, $rootScope) {
    // Scroll to the top of page on route change
    $rootScope.$on('$stateChangeSuccess', function (event) {
      if ($location.hash()) {
        // Scroll to the fragment
        return $anchorScroll();
      }

      // Scroll to the top content
      $anchorScroll();
    });
  }]);

module.exports = 'odca.scroll_top';
