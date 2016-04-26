'use strict';

function committeeController($scope, committee, $state) {
  $scope.state = $state;
  $scope.committee = committee;

  console.info('COMMITTEE STATE = ', $scope.state);
  console.info('COMMITTEE COMMITEE = ', $scope.committee);
}

module.exports = committeeController;
