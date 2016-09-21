'use strict';

function candidateRoutes ($stateProvider) {
  $stateProvider.state({
    name: 'appMain.localePage.candidate',
    url: '/candidate/:candidateId',
    template: '<candidate-page candidate="vm.candidate" supporting="vm.supporting" opposing="vm.opposing"></candidate-page>',
    controller: function (candidate, supporting, opposing) {
      var vm = this;
      vm.candidate = candidate;
      vm.supporting = supporting;
      vm.opposing = opposing;
    },
    controllerAs: 'vm',
    ncyBreadcrumb: {
      label: '{{ vm.candidate.name }}',
      parent: 'appMain.localePage'
    },
    resolve: {
      candidate: function ($stateParams, static_api) {
        return static_api.candidate.get({candidate_id: $stateParams.candidateId});
      },
      supporting: function ($stateParams, static_api) {
        return static_api.candidate.supporting({candidate_id: $stateParams.candidateId});
      },
      opposing: function ($stateParams, static_api) {
        return static_api.candidate.opposing({candidate_id: $stateParams.candidateId});
      }
    }
  });
}


module.exports = candidateRoutes;
