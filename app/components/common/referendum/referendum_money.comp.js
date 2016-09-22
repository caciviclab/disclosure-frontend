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

  var is_supporting = ctrl.is_supporting = ctrl.support_oppose === 'supporting';

  $scope.$watch('$ctrl.money', function (money) {
    $q.when(money.$promise || money, function (money) {
      updateCommittees(money);
    });
  });

  function updateCommittees (money) {
    ctrl.total_contributions = is_supporting ? money.money_supporting : money.money_opposing;

    var committees = is_supporting ?
      money.supporting_organizations :
      money.opposing_organizations;

    array_update(ctrl.committees, committees);
  }
}


module.exports = 'referendum.money';
