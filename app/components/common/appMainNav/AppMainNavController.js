(function() {
  'use strict';
  // Controller naming conventions should start with an uppercase letter
  function AppMainNavController($scope) {

    $scope.navCollapsed = true;

    //$scope.isCollapsed = true;

    $scope.mainNavMenu = [
      {sref: 'home', title: 'Home'},
      {sref: 'examplePage1', title: 'Example Page 1'},
      {sref: 'examplePage2', title: 'Example Page 2'}
    ];
  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
  AppMainNavController.$inject = ['$scope'];
  module.exports = AppMainNavController;
})();

