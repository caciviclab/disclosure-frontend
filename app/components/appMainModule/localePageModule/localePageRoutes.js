'use strict';

function localePageRoutes($stateProvider) {

  var localePage = {
    name: 'appMain.localePage',
    url: '^/:localeType/:localeId/:localeName',
    abstract: true,
    template: '<locale-page class="page-fade" locale-name="{{ $ctrl.localeName }}"></locale-page>',
    controller: ['$rootScope', '$scope', '$stateParams', function($rootScope, $scope, $stateParams) {
      var ctrl = this;
      ctrl.localeName = $stateParams.localeName;
    }],
    controllerAs: '$ctrl',
    resolve: {
      ballot: ['$stateParams', 'static_api', function($stateParams, static_api) {
        return static_api.locality.current_ballot({locality_id: $stateParams.localeId});
      }],
      locality: ['$stateParams', 'static_api', function($stateParams, static_api) {
        return static_api.locality.get({locality_id: $stateParams.localeId});
      }]
    }
  };

  var localeIndexPage = {
    name: 'appMain.localePage.index',
    url: '',
    template: 'Click on a ballot item to the left to see campaign finance data in {{ $ctrl.locality.name  || "your city" }}.', // Placeholder for now
    controller: ['$filter', '$rootScope', '$scope', '$state', '$stateParams', 'ballot', function($filter, $rootScope, $scope, $state, $stateParams, ballot) {
      $scope.breadcrumb = $rootScope.breadcrumb;
      angular.extend($scope.breadcrumb, $stateParams);

      // Currently not much content for the locality page so redirect to Council At-Large ballot item
      ballot.$promise.then(function(ballot) {
        var ballot_item_of_interest = findInterestingBallotItem(ballot.ballot_items);

        $state.go('appMain.localePage.electionTypePage.index', {
          electionYear: new Date(ballot.date).getYear(),
          electionType: ballot_item_of_interest.contest_type.toLowerCase(),
          electionTypeId: ballot_item_of_interest.id,
          electionTitle: $filter('slugify')(ballot_item_of_interest.name)
        });
      });

      function findInterestingBallotItem(ballot_items) {
        var ballot_item_of_interest = ballot_items[0]; // Fallback to the first item
        for (var idx in ballot_items) {
          if (/Council At-Large/.test(ballot_items[idx].name)) {
            ballot_item_of_interest = ballot_items[idx];
            break;
          }
        }

        return ballot_item_of_interest;
      }
    }],
    controllerAs: '$ctrl',
    ncyBreadcrumb: {
      label: '{{ breadcrumb.localeName }}',
      parent: 'appMain'
    }
  };

  $stateProvider.state(localeIndexPage);
  $stateProvider.state(localePage);

}

localePageRoutes.$inject = ['$stateProvider'];
module.exports = localePageRoutes;
