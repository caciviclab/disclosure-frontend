'use strict';

angular.module('odca.page_title', [])
  .run(function ($rootScope, pageTitle) {

    // Listen to route changes to update title from route config
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      pageTitle(current && current.title || '');
    });

  })
  .factory('pageTitle', function ($rootScope) {
    return function (title) {
      pageTitle($rootScope, title);
    };
  });


function pageTitle ($rootScope, title) {
  $rootScope.page_title = title ? title + ' | ' : '';
}


module.exports = 'odca.page_title';
