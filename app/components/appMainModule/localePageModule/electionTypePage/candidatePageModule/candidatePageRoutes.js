'use strict';

function candidateRoutes ($stateProvider) {
  $stateProvider.state({
    name: 'appMain.localePage.candidate',
    url: '/candidate/:candidateId',
    template: '<odca-candidate-page candidate="vm.candidate" supporting="vm.supporting" opposing="vm.opposing"></odca-candidate-page>',
    controller: ['$rootScope', '$scope', '$stateParams', 'candidate', 'opposing', 'supporting', function ($rootScope, $scope, $stateParams, candidate, opposing, supporting) {
      var vm = this;
      vm.candidate = candidate;
      vm.supporting = supporting;
      vm.opposing = opposing;

      $scope.breadcrumb = $rootScope.breadcrumb;
      angular.extend($scope.breadcrumb, $stateParams, {candidate: candidate});
    }],
    controllerAs: 'vm',
    ncyBreadcrumb: {
      label: '{{ breadcrumb.candidate.name }}',
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
    },
    onEnter: ['$state', 'candidate', 'pageMetadata', function($state, candidate, pageMetadata) {
      candidate.$promise.then(function(candidate) {
        pageMetadata({title: candidate.name});
      });
    }]
  });
}


module.exports = candidateRoutes;
