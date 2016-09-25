'use strict';

angular.module('odca.page_metadata', [])
  .run(function($rootScope, pageMetadata) {

    // Listen to route changes to update title from route config
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      pageMetadata(current && current.title || '');
    });

  })
  .factory('pageMetadata', function ($rootScope) {
    return function (title) {
      pageMetadata($rootScope, title);
    };
  });


function pageMetadata ($rootScope, title) {
  $rootScope.page_title = title ? title + ' | ' : '';
}


module.exports = 'odca.page_metadata';
