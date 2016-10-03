'use strict';

var angular = require('angular');

angular.module('odca.candidate', [
  require('../money'),
  require('../percentageCalculator'),
  require('./photo.filter'),
  require('../page_metadata')
])
  .directive('odcaCandidatePage', function () {
    return {
      restrict: 'E',
      template: require('./candidate_page.html'),
      controller: CandidatePageController,
      controllerAs: '$ctrl',
      bindToController: true,
      scope: {
        candidate: '=',
        opposing: '=',
        supporting: '='
      }
    };
  })
  .directive('odcaCandidateProfile', function () {
    return {
      restrict: 'E',
      controllerAs: '$ctrl',
      controller: CandidateProfileController,
      template: require('./candidate_profile.html'),
      bindToController: true,
      scope: {
        candidate: '='
      }
    };
  });


// Required for conrollerAs/bindToController
function CandidateProfileController () {
}


function CandidatePageController (percentageCalculator) {
  var ctrl = this;
  ctrl.onVisible = onVisible;

  ctrl.supporting.$promise.then(function (supporting) {
    ctrl.current_balance = supporting.total_contributions - supporting.total_expenditures;
    ctrl.contributions_by_type_percentages = percentageCalculator(supporting.contributions_by_type, 1000);
  });

  function onVisible ($el) {
    $el.removeClass('is-off-screen');
  }
}


module.exports = 'odca.candidate';
