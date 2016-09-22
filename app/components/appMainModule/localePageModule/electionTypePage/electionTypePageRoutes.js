'use strict';

function electionTypePageRoutes($stateProvider) {

  var electionTypePage = {
    name: 'appMain.localePage.electionTypePage',
    url: '/:electionYear/:electionType/:electionTypeId/:electionTitle',
    // url: '/:electionYear/:electionType',
    template: '<locale-election-page type-id="{{ctrl.electionTypeId}}" type="{{ctrl.electionType}}"></locale-election-page>',
    controller: function($scope, $stateParams) {
      var ctrl = this;
      ctrl.electionType = $stateParams.electionType;
      ctrl.electionTypeId = $stateParams.electionTypeId;
      ctrl.electionTitle = $stateParams.electionTitle;
    },
    controllerAs: 'ctrl',
    ncyBreadcrumb: {
      label: '{{ctrl.electionTitle}}',
      parent: 'appMain.localePage'
    }
  };

  var officeElectionPage = {
    name: 'appMain.localePage.electionTypePage.officeElection', //officeElectionList??
    url: '/office-election',
    template: '<h1>OFFICE ELECTION PAGE</h1>'
  };

  // Handles both supporting/opposing pages
  var referendumMoneyPage = {
    name: 'appMain.localePage.referendumMoney',
    url: '/:electionYear/:electionType/:electionTypeId/:electionTitle/:support_or_oppose',
    template: '<referendum-money referendum="ctrl.referendum" money="ctrl.money"></referendum-money>',
    controller: ['$stateParams', 'referendum', 'money', function($stateParams, referendum, money) {
      var ctrl = this;
      ctrl.referendum = referendum;
      ctrl.money = money;
      ctrl.support_or_oppose = $stateParams.support_or_oppose;
      //TODO grab the state params so that we have the state we need for other electionTypePage transitions
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
      label: '{{ctrl.support_or_oppose}}',
      parent: 'appMain.localePage.electionTypePage'
    }
  };

  $stateProvider.state(electionTypePage);
  $stateProvider.state(officeElectionPage);
  $stateProvider.state(referendumMoneyPage);
}

electionTypePageRoutes.$inject = ['$stateProvider'];
module.exports = electionTypePageRoutes;
