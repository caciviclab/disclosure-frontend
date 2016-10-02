'use strict';

function committeeController($scope, $state, committee, contributions) {
  $scope.state = $state;
  $scope.committee = committee;
  $scope.contributions = contributions;
}

module.exports = committeeController;
