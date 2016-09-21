'use strict';

var angular = require('angular');
var utils = require('../utils');

angular.module('referendum.money', [
  require('../money')
])
  .component('referendumMoney', {
    template: require('./referendum_money.html'),
    controller: ReferendumMoneyController,
    bindings: {
      referendum: '=',
      money: '='
    }
  });

function ReferendumMoneyController ($routeParams, $q, $scope) {
  var ctrl = this;
  ctrl.support_oppose = $routeParams.support_oppose;
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

    utils.array_update(ctrl.committees, committees);
  }
}


module.exports = 'referendum.money';
