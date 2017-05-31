/**
 * committeePageModule/committeePageRoutes.js
 *
 * The ui-router state configuration for the committee module. Contains several
 * pages containing information on a single campaign committee.
 **/

'use strict';

function committeePageRoutes($stateProvider) {
  $stateProvider.state({
    name: 'appMain.committee',
    abstract: true,
    url: '^/committee/:filer_id',
    template: require('./committeePage.html'),
    controller: 'committeePageController',
    resolve: {
      committee: function($stateParams, static_api) {
        return static_api.committee.get({
          filer_id: $stateParams.filer_id
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
    name: 'appMain.committee.contributions',
    url: '',
    controller: 'committeePageContributionsController',
    template: '<committee-listing committee="committee" contributions="contributions"></committee-listing>',
    ncyBreadcrumb: {
      label: '{{ committee.name }}',
      parent: 'appMain'
    },
    resolve: {
      contributions: function($stateParams, static_api) {
        var apiCall = static_api.committee.contributions({
          filer_id: $stateParams.filer_id
        });
        return apiCall.$promise;
      }
    }
  });
}

committeePageRoutes.$inject = ['$stateProvider'];
module.exports = committeePageRoutes;
