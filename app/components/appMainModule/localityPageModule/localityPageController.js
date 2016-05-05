'use strict';

// function localityPageController($scope, ballot, locality, disclosureSummary) {
function localityPageController($scope, locality) {
  $scope.locality = locality;
  // $scope.ballot = ballot;
  // $scope.disclosureSummary = disclosureSummary;
}

localityPageController.$inject = ['$scope', 'locality'];
module.exports = localityPageController;
