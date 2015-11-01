(function() {
  'use strict';
  // Controller naming conventions should start with an uppercase letter
  function AppMainController($scope) {
    $scope.searchBarEnabled = true;
  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
  AppMainController.$inject = ['$scope'];
  module.exports = AppMainController;
})();
