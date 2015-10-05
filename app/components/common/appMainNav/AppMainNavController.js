(function() {
  'use strict';
  // Controller naming conventions should start with an uppercase letter
  function AppMainNavController($scope) {
    
    //$scope.searchBarEnabled = true;
    //$scope.searchBarEnabled = false;

    //$scope.hasNavbarSearch = !hasNavbarSearch;

    //$scope.searchInNav = false;

    //$scope.navbarSearch = function() {
    //
    //};
    //$scope.searchEnabled = function() {
    //  $scope.searchInNav = true;
    //};
    //
    //$scope.deActivateSearch = function() {
    //  $scope.searchInNav = false;
    //};

    $scope.navCollapsed = true;

    //$scope.isCollapsed = true;

    $scope.mainNavMenu = [
      {sref: 'home', title: 'Home'},
      {sref: 'examplePage1', title: 'Example Page 1'}
    ];
  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
  AppMainNavController.$inject = ['$scope'];
  module.exports = AppMainNavController;
})();

