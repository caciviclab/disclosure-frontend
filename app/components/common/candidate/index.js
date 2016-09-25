'use strict';

var angular = require('angular');

angular.module('odca.candidate', [
  require('./photo.filter'),
  require('../page_metadata'),
  require('../money')
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


function CandidatePageController () {
  var ctrl = this;
  ctrl.onVisible = onVisible;

  ctrl.supporting.$promise.then(function (supporting) {
    ctrl.current_balance = supporting.total_contributions - supporting.total_expenditures + supporting.total_loans_received;
  });

  function onVisible ($el) {
    $el.removeClass('is-off-screen');
  }
}

module.exports = 'odca.candidate';
