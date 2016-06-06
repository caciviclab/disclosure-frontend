/**
 * localityPageModule/state.js
 *
 * The ui-router state configuration for the locality page module.
 **/

'use strict';

module.exports = function($stateProvider) {
  $stateProvider
    .state({  //TODO: ADD IN MISSING UI-VIEW
      name: 'appMain.locality',
      abstract: true,
      url: '^/locality',
      template: '<div ui-view class="page-fade"></div>',
      ncyBreadcrumb: {
        label: 'Locality',
        parent: 'appMain'
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
      url: '^/:locality_id/money',
      controller: 'localityPageController',
      template: '<locality-money locality="locality" disclosure-summary="disclosureSummary"></locality-money>',
      resolve: {
        locality: function ($stateParams, disclosureApi) {
          return disclosureApi.locality.get({
            locality_id: $stateParams.locality_id
          });
        }
        // ballot: function($stateParams, disclosureApi) {
        //   return disclosureApi.locality.current_ballot({
        //     locality_id: $stateParams.locality_id
        //   });
        // },
        // disclosureSummary: function(disclosureApi, ballot) {
        //   return disclosureApi.ballot.disclosure_summary({ballot_id: ballot.id});
        // }
      },
      ncyBreadcrumb: {
        label: '{{ locality.name }}',
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
      url: '^/elections',
      template: '<locality-ballot ballot="ballot"></locality-ballot>',
      //controller: 'localityBallotPageController',
      // resolve: {
      //
      // },
      ncyBreadcrumb: {
        label: '{{ locality.name }}',
        parent: 'appMain.locality'
      },
      data: {
        moduleClasses: 'page',
        pageClasses: 'locality',
        pageTitle: 'City',
        pageDescription: 'Some description.'
      }
    });

};
