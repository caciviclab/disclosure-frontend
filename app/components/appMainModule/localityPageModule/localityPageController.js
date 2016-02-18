'use strict';

function localityPageController($scope, ballot, locality, disclosureSummary) {
  $scope.locality = locality;
  $scope.ballot = ballot;
  $scope.disclosureSummary = disclosureSummary;
}

module.exports = localityPageController;
