'use strict';

var angular = require('angular');
angular.module('candidates', [
  require('./photo.filter')
])
  .directive('candidateProfile', function () {
    return {
      restrict: 'E',
      controllerAs: '$ctrl',
      controller: CandidateProfileController,
      template: require('./candidate_profile.html'),
      bindToController: {
        candidate: '='
      }
    };
  });

function CandidateProfileController () {
}

module.exports = 'candidates';
