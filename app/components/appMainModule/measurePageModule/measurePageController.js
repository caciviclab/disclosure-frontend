'use strict';

function measurePageController($scope, measure) {
  $scope.city = measure.city; // Hack for breadcrumb
  $scope.measure = measure;
}

module.exports = measurePageController;
