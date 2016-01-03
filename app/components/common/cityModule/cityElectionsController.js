'use strict';

function cityElectionsController($scope, ballot) {
  $scope.ballot = ballot;

  $scope.isOffice = isOffice;
  $scope.isReferendum = isReferendum;

  function isOffice(contest) {
    return contest.type === 'office';
  }

  function isReferendum(contest) {
    return contest.type === 'referendum';
  }
}

module.exports = cityElectionsController;
