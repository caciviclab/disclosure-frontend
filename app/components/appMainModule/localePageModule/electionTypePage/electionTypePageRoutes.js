'use strict';

function electionTypePageRoutes($stateProvider) {

  var electionTypePage = {
    name: 'appMain.localePage.electionTypePage',
    url: '/:electionYear/:electionType/:electionTitle',
    // url: '/:electionYear/:electionType',
    template: '<locale-election-page type="{{ctrl.electionType}}"></locale-election-page>',
    controller: function($scope, $stateParams) {
      var ctrl = this;
      ctrl.electionType = $stateParams.electionType;
    },
    controllerAs: 'ctrl'
    // ncyBreadcrumb: {
    //   // label: '{{ctrl.localeName}}',
    //   parent: 'appMain.localePage'
    // }
  };

  var officeElectionPage = {
    name: 'appMain.localePage.electionTypePage.officeElection', //officeElectionList??
    url: '/office-election',
    template: '<h1>OFFICE ELECTION PAGE</h1>'
  };

  $stateProvider.state(electionTypePage);
  $stateProvider.state(officeElectionPage);
}

electionTypePageRoutes.$inject = ['$stateProvider'];
module.exports = electionTypePageRoutes;