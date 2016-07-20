'use strict';

// Controller naming conventions should start with an uppercase letter
// function HomePageController($scope, $log, $http, TestFactory1, disclosureApi) {
function HomePageController($scope, $log, $http, TestFactory1) {
  var localitiesList;

  $scope.searchBarEnabled = false;
  $scope.testVar = 'We are up and running using a required module!';
  //$scope.searchResults = [];
  localitiesList = {};
  // This is pretty jank, we should debounce this or do the search when the
  // user stops typing.
  // $scope.$watch('search', function(newValue) {
  //   if (typeof newValue === 'undefined') {
  //     return;
  //   }
  //
  //   disclosureApi.locality.search({q: $scope.search})
  //     .then(function(results) {
  //       $scope.searchResults = results;
  //       $log.info('LIST OF LOCALITIES = ', $scope.searchResults);
  //     });
  // });

  $scope.logClickEvent =  function($event) {
    $log.info('CLICK EVENT = ', $event);
  };

  function searchLocalities() {
    return TestFactory1.getListOfLocalities()
      .then(function(data) {
        $scope.searchResults = data;
        $log.info('LIST OF LOCALITIES = ', $scope.searchResults);
        return $scope.searchResults;
      });
  }
  searchLocalities();
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
// HomePageController.$inject = ['$scope', '$log', '$http', 'TestFactory1', 'disclosureApi'];
HomePageController.$inject = ['$scope', '$log', '$http', 'TestFactory1'];
module.exports = HomePageController;
