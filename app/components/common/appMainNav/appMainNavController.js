'use strict';

function appMainNavController($scope) {
  $scope.navCollapsed = true;

  // On state change, we want to close the nav
  $scope.$on('$stateChangeSuccess', function() {
    handleStateChange();
  });

  function handleStateChange() {
    $scope.navCollapsed = true;
  }
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
appMainNavController.$inject = ['$scope'];
module.exports = appMainNavController;
