'use strict';

// Controller naming conventions should start with an uppercase letter
function appMainNavController($scope) {
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

  // On state change, we want to close the nav
  $scope.$on('$stateChangeSuccess', function() {
    handleStateChange();
  });

  $scope.demoNavMenu = [
    {sref: 'appMain.examplePage1', title: 'Example page 1'},
    {sref: 'appMain.locality.money({locality_id: 71})', title: 'Ex. city'},
    {sref: 'appMain.committee.main({committee_id: 1})', title: 'Ex. committee'},
    {sref: 'appMain.measure.index({measure_id: 1})', title: 'Ex. ballot measure'}
  ];

  function handleStateChange() {
    $scope.navCollapsed = true;
  }
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
appMainNavController.$inject = ['$scope'];
module.exports = appMainNavController;
