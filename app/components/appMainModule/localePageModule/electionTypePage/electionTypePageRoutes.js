'use strict';

function electionTypePageRoutes($stateProvider) {

  var electionTypePage = {
    name: 'appMain.localePage.electionTypePage',
    // url: '/electiontype',
    // url: '/:electionYear/:electionType/:electionTitle',
    url: '/:electionYear/:electionType',
    template: '<locale-election-page type="ctrl.electionType"></locale-election-page>',
    // template: '<div>ELECTION TYPE = {{ctrl.electionType}}</div>',
    controller: function($scope, $stateParams) {
      var ctrl = this;
      ctrl.electionType = $stateParams.electionType;
    },
    controllerAs: 'ctrl'
    //template: '<div>Election Type Page</div>'
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