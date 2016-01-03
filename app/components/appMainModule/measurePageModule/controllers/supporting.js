'use strict';

function supportingController($scope, measure, supporters) {
  $scope.measure = measure;
  $scope.supporters = supporters;
}

module.exports = supportingController;
