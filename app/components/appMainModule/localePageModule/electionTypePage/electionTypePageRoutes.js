'use strict';

function electionTypePageRoutes($stateProvider) {

  var electionTypePage = {
    name: 'appMain.localePage.electionTypePage',
    url: '/:electionYear/:electionType/:electionTypeId/:electionTitle',
    abstract: true,
    template: '<div ui-view></div>'
  };

  var electionTypeIndexPage = {
    name: 'appMain.localePage.electionTypePage.index',
    url: '',
    template: '<locale-election-page type-id="{{ctrl.electionTypeId}}" type="{{ctrl.electionType}}"></locale-election-page>',
    controller: ['$rootScope', '$scope', '$stateParams', function($rootScope, $scope, $stateParams) {
      var ctrl = this;
      ctrl.electionType = $stateParams.electionType;
      ctrl.electionTypeId = $stateParams.electionTypeId;
      ctrl.electionTitle = $stateParams.electionTitle;

      $scope.breadcrumb = $rootScope.breadcrumb;
      angular.extend($scope.breadcrumb, $stateParams);
    }],
    controllerAs: 'ctrl',
    ncyBreadcrumb: {
      label: '{{ breadcrumb.electionTitle }}',
      parent: 'appMain.localePage.index'
    }
  };

  var officeElectionPage = {
    name: 'appMain.localePage.electionTypePage.officeElection', //officeElectionList??
    url: '/office-election',
    template: '<h1>OFFICE ELECTION PAGE</h1>'
  };

  // Handles both supporting/opposing pages
  var referendumMoneyPage = {
    name: 'appMain.localePage.electionTypePage.referendumMoney',
    url: '/:support_or_oppose',
    template: '<referendum-money referendum="ctrl.referendum" money="ctrl.money"></referendum-money>',
    controller: ['$rootScope', '$scope', '$stateParams', 'referendum', 'money', function($rootScope, $scope, $stateParams, referendum, money) {
      var ctrl = this;
      ctrl.referendum = referendum;
      ctrl.money = money;
      ctrl.support_or_oppose = $stateParams.support_or_oppose;
      //TODO grab the state params so that we have the state we need for other electionTypePage transitions

      $scope.breadcrumb = $rootScope.breadcrumb;
      angular.extend($scope.breadcrumb, $stateParams);
    }],
    resolve: {
      referendum: ['$stateParams', 'static_api', function($stateParams, static_api) {
        return static_api.referendum.get({referendum_id: $stateParams.electionTypeId});
      }],
      money: ['$stateParams', 'static_api', function($stateParams, static_api) {
        var method = $stateParams.support_or_oppose === 'supporting' ? 'supporting' : 'opposing';
        return static_api.referendum[method]({referendum_id: $stateParams.electionTypeId});
      }]
    },
    controllerAs: 'ctrl',
    ncyBreadcrumb: {
      label: '{{ breadcrumb.support_or_oppose }}',
      parent: 'appMain.localePage.electionTypePage.index'
    },
    onEnter: ['$state', 'pageMetadata', 'referendum', function ($state, pageMetadata, referendum) {
      referendum.$promise.then(function(referendum) {
        var title = $state.params.support_or_oppose === 'supporting' ?
          'Supporters of measure ' + referendum.number :
          'Opponents of measure ' + referendum.number;
        pageMetadata({title: title, description: referendum.summary});
      });
    }]
  };

  $stateProvider.state(electionTypeIndexPage);
  $stateProvider.state(electionTypePage);
  $stateProvider.state(officeElectionPage);
  $stateProvider.state(referendumMoneyPage);
}

electionTypePageRoutes.$inject = ['$stateProvider'];
module.exports = electionTypePageRoutes;
