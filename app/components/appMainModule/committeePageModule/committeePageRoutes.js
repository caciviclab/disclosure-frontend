/**
 * committeePageModule/committeePageRoutes.js
 *
 * The ui-router state configuration for the committee module. Contains several
 * pages containing information on a single campaign committee.
 **/

'use strict';

function committeePageRoutes($stateProvider) {
//module.exports = function($stateProvider) {
  $stateProvider.state({
    name: 'appMain.committee',
    // name: 'appMain.locality.committee',
    abstract: true,
    url: '^/committee/:committee_id',
    template: '<ui-view></ui-view>',
    controller: 'committeePageController',
    resolve: {
      committee: function($stateParams, disclosureApi) {
        return disclosureApi.committee.get({
          committee_id: $stateParams.committee_id
        });
      }
    },
    data: {
      moduleClasses: 'page',
      pageClasses: 'committee'
    },
    onEnter: ['committee', 'pageMetadata', function(committee, pageMetadata) {
      committee.$promise.then(function(committee) {
        pageMetadata({title: committee.name});
      });
    }]
  });

  $stateProvider.state({
    name: 'appMain.committee.main',
    // name: 'appMain.locality.committee.main',
    url: '',
    template: require('./committeePage.html'),
    //template: '<committee-listing committee="committee"></committee-listing>',
    ncyBreadcrumb: {
      label: '{{ committee.name }}',
      parent: 'appMain.locality'
    }
  });

  $stateProvider.state({
    name: 'appMain.committee.contributors',
    // name: 'appMain.locality.committee.contributors',
    url: '/contributors',
    controller: 'committeeContributorsPageController',
    template: '<committee-contributors contributors="contributors"></committee-contributors>',
    ncyBreadcrumb: {
      label: 'Contributors',
      parent: 'appMain.committee.main'
      // parent: 'appMain.locality.committee.main'
    },
    resolve: {
      contributors: function($stateParams, disclosureApi) {
        return disclosureApi.committee.contributors({
          committee_id: $stateParams.committee_id
        });
      }
    },
    data: {
      moduleClasses: 'page',
      pageClasses: 'contributors'
    }
  });
}

committeePageRoutes.$inject = ['$stateProvider'];
module.exports = committeePageRoutes;
