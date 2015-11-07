(function() {
  'use strict';
  // Controller naming conventions should start with an uppercase letter
  function HomePageController($scope, $http, disclosureApi) {
    $scope.searchBarEnabled = false;
    $scope.testVar = 'We are up and running using a required module!';
    $scope.searchResults = [];
    // This is pretty jank, we should debounce this or do the search when the
    // user stops typing.
    $scope.$watch('search', function(newValue, old) {
      if (typeof newValue === 'undefined') {
        return;
      }

      disclosureApi.then(function(api) {
        api.search.get({q: $scope.search})
          .then(function(resp) {
            // TODO Fix this on the server, shouldn't need JSON.parse.
            // JSON.parse is required because the swagger schema doesn't define
            // the response as an array, so it's just interpretted as string.
            $scope.searchResults = JSON.parse(resp.data);
          });
      });
    });
  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
  HomePageController.$inject = ['$scope', '$http', 'disclosureApi'];
  module.exports = HomePageController;
})();
