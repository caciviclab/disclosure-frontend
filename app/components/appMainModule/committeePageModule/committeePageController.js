'use strict';

function committeeController($scope, $state, committee) {
  $scope.state = $state;
  $scope.committee = committee;
}

module.exports = committeeController;
