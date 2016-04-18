'use strict';

function localityBallotPageController($scope, ballot) {
  $scope.ballot = ballot;
}

localityBallotPageController.$inject = ['$scope', 'ballot'];
module.exports = localityBallotPageController;
