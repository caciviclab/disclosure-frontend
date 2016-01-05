/**
 * cityPageModule/state.js
 *
 * The ui-router state configuration for the city page module.
 **/

'use strict';

module.exports = function($stateProvider) {
  $stateProvider
    .state({
      name: 'appMain.city',
      abstract: true,
      url: '^/city/:fips_id',
      controller: require('./cityController'),
      template: require('./index.html'),
      resolve: {
        city: function($stateParams, disclosureApi) {
          return disclosureApi.locations.get({fips_id: $stateParams.fips_id});
        }
      },
      data: {
        moduleClasses: 'page',
        pageClasses: 'city',
        pageTitle: 'City',
        pageDescription: 'Some description.'
      }
    })

    .state({
      name: 'appMain.city.money',
      url: '/money',
      template: require('./money/index.html'),
      ncyBreadcrumb: {
        label: '{{ city.location.name }}',
        parent: 'appMain.city'
      },
      data: {
        moduleClasses: 'page',
        pageClasses: 'city',
        pageTitle: 'City',
        pageDescription: 'Some description.'
      }
    })

    .state({
      name: 'appMain.city.elections',
      url: '/elections',
      template: require('./elections/index.html'),
      controller: 'cityElectionsController',
      ncyBreadcrumb: {
        label: '{{ city.location.name }}',
        parent: 'appMain.city'
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
        pageClasses: 'city',
        pageTitle: 'City',
        pageDescription: 'Some description.'
      }
    });

};
