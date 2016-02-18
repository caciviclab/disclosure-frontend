'use strict';

function localityBallotController($scope) {
  $scope.isOffice = isOffice;
  $scope.isReferendum = isReferendum;

  function isOffice(contest) {
    return contest.type === 'office';
  }

  function isReferendum(contest) {
    return contest.type === 'referendum';
  }
}

module.exports = localityBallotController;
