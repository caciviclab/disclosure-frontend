'use strict';

var angular = require('angular');

angular.module('referendum.money', [
  require('../money'),
  require('../array_update')
])
  .directive('referendumMoney', function () {
    return {
      restrict: 'E',
      template: require('./referendum_money.html'),
      controller: ReferendumMoneyController,
      controllerAs: '$ctrl',
      bindToController: true,
      scope: {
        referendum: '=',
        money: '='
      }
    };
  });

function ReferendumMoneyController ($stateParams, $q, $scope, array_update) {
  var ctrl = this;
  ctrl.support_oppose = $stateParams.support_or_oppose;
  ctrl.committees = [];
  ctrl.total_contributions = 0;
  ctrl.total_expenditures = 0;

  var is_supporting = ctrl.is_supporting = ctrl.support_oppose === 'supporting';
  ctrl.bar_color = is_supporting ? 'green' : 'red';

  $scope.$watch('$ctrl.money', function (money) {
    $q.when(money.$promise || money, function (money) {
      updateCommittees(money);
    });
  });

  function updateCommittees (money) {
    // This isn't needed, only for symmetry
    ctrl.total_contributions = money.total_contributions;

    var committees = is_supporting ?
      money.supporting_organizations :
      money.opposing_organizations;

    ctrl.total_expenditures = 0;
    angular.forEach(committees, function(committee) {
      ctrl.total_expenditures += committee.amount;
    });

    array_update(ctrl.committees, committees);
  }
}


module.exports = 'referendum.money';
