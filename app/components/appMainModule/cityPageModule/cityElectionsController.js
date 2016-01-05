'use strict';

function cityElectionsController($scope, ballot) {
  $scope.ballot = ballot;

  $scope.isOffice = isOffice;
  $scope.isReferendum = isReferendum;

  function isOffice(contest) {
    return contest.contest_type === 'office';
  }

  function isReferendum(contest) {
    return contest.contest_type === 'referendum';
  }
}

module.exports = cityElectionsController;
