/**
 * localityPageModule/state.js
 *
 * The ui-router state configuration for the locality page module.
 **/

'use strict';

module.exports = function($stateProvider) {
  $stateProvider
    .state({
      name: 'appMain.locality',
      abstract: true,
      url: '^/locality/:locality_id',
      controller: 'localityPageController',
      template: '<locality-listing locality="locality"></locality-listing>',
      resolve: {
        locality: function($stateParams, disclosureApi) {
          return disclosureApi.locations.get({locality_id: $stateParams.locality_id});
        }
      },
      data: {
        moduleClasses: 'page',
        pageClasses: 'locality',
        pageTitle: 'City',
        pageDescription: 'Some description.'
      }
    })

    .state({
      name: 'appMain.locality.money',
      url: '/money',
      template: '<locality-money locality="locality"></locality-money>',
      ncyBreadcrumb: {
        label: '{{ locality.location.name }}',
        parent: 'appMain.locality'
      },
      data: {
        moduleClasses: 'page',
        pageClasses: 'locality',
        pageTitle: 'City',
        pageDescription: 'Some description.'
      }
    })

    .state({
      name: 'appMain.locality.elections',
      url: '/elections',
      template: '<locality-ballot ballot="ballot"></locality-ballot>',
      controller: 'localityBallotPageController',
      ncyBreadcrumb: {
        label: '{{ locality.location.name }}',
        parent: 'appMain.locality'
      },
      resolve: {
        ballot: function($q) {
          return $q.resolve({
            ballot_id: 'ballot1',
            locality_id: 'locality2',
            contests: [
              {
                contest_type: 'office',
                name: 'Mayor'
              },
              {
                contest_type: 'office',
                name: 'City Auditor'
              },
              {
                contest_type: 'office',
                name: 'City Treasurer'
              },
              {
                contest_type: 'office',
                name: 'Distrit 1 City Council'
              },
              {
                contest_type: 'office',
                name: 'Distrit 3 City Council'
              },
              {
                contest_type: 'office',
                name: 'Distrit 5 City Council'
              },
              {
                contest_type: 'referendum',
                name: 'Measure AA'
              },
              {
                contest_type: 'referendum',
                name: 'Measure BB'
              },
              {
                contest_type: 'referendum',
                name: 'Measure CC'
              }
            ]
          });
        }
      },
      data: {
        moduleClasses: 'page',
        pageClasses: 'locality',
        pageTitle: 'City',
        pageDescription: 'Some description.'
      }
    });

};
