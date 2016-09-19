'use strict';

var angular = require('angular');

angular.module('candidate', [
  require('../candidates'),
  require('../common'),
  require('../money')
])
  .directive('candidatePage', function () {
    return {
      restrict: 'E',
      template: require('./candidate_page.html'),
      controller: CandidatePageController,
      controllerAs: '$ctrl',
      bindToController: {
        candidate: '=',
        opposing: '=',
        supporting: '='
      }
    };
  });

function CandidatePageController ($rootScope, pageTitle) {
  var ctrl = this;
  ctrl.onVisible = onVisible;

  ctrl.candidate.$promise.then(function (candidate) {
    pageTitle(candidate.name);
  });

  ctrl.supporting.$promise.then(function (supporting) {
    ctrl.current_balance = supporting.total_contributions - supporting.total_expenditures + supporting.total_loans_received;
  });

  function onVisible ($el) {
    $el.removeClass('is-off-screen');
  }
}

module.exports = 'candidate';
