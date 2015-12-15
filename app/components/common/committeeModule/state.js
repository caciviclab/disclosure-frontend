/**
 * committeeModule/state.js
 *
 * The ui-router state configuration for the committee module. Contains several
 * pages containing information on a single campaign committee.
 **/

module.exports = function($stateProvider) {
  $stateProvider.state({
    name: 'appMain.committee',
    url: '^/committee/:committee_id',
    controller: 'committeeController',
    template: require('./templates/committee.html'),
    ncyBreadcrumb: {
      label: '{{ committee.name }}',
      parent: 'appMain.city'
    },
    resolve: {
      committee: function($stateParams, $q) {
        return $q.resolve({
          committee_id: 1234,
          name: 'Americans for Liberty',
          contribution_by_type: {
            unitemized: 2916394,
            self_funded: 512554,
            political_party: 6426112,
            individual: 11134547,
            recipient_committee: 986229
          },
          contribution_by_area: {
            inside_location: 0.56,
            inside_state: 0.38,
            outside_state: 0.06
          }
        });
      }
    },
    data: {
      moduleClasses: 'page',
      pageClasses: 'committee',
      pageTitle: 'Committee',
      pageDescription: 'A campaign committee.'
    }
  });
};
