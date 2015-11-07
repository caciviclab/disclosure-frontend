(function() {
  'use strict';
  // Controller naming conventions should start with an uppercase letter
  function HomePageController($scope, $http) {
    $scope.searchBarEnabled = false;
    $scope.testVar = 'We are up and running using a required module!';
    $scope.searchResults = [];
    // This is pretty jank, we should debounce this or do the search when the
    // user stops typing.
    $scope.$watch('search', function(newValue, old) {
      if (typeof newValue === 'undefined') {
        return;
      }

      $http({
        url: 'http://admin.caciviclab.org/search/?q=' + $scope.search,
        headers: {'Accept': 'application/json' }
      }).then(function(resp) {
        $scope.searchResults = resp.data;
        // $scope.searchResults.concat(resp.data);
      });
    });
  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
  HomePageController.$inject = ['$scope', '$http'];
  module.exports = HomePageController;
})();
