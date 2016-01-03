'use strict';

function measureController($scope, measure) {
  $scope.city = measure.city; // Hack for breadcrumb
  $scope.measure = measure;
}

module.exports = measureController;
