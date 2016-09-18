'use strict';


var angular = require('angular');

var static_backend_url = 'https://disclosure-backend-static.tdooner.com';

angular.module('static_api', [
  require('angular-resource')
])
  .factory('static_api', function ($resource) {
    'ngInject';

    return {
      candidate: api_group('/candidate/:candidate_id', {
        supporting: {method: 'get', url: '/supporting'},
        opposing: {method: 'get', url: '/opposing'}
      }),
      committee: api_group('/committee/:committee_id', {}),
      locality: api_group('/locality/:locality_id', {
        get: {method: 'get', transformResponse: arrayFirst}, // Workaround for backend returning an  array here
        current_ballot: {method: 'get', url: '/current_ballot'}
      }),
      referendum: api_group('/referendum/:referendum_id', {
        supporting: {method: 'get', url: '/supporting'},
        opposing: {method: 'get', url: '/opposing'}
      }),
    };

    function api_group (base_url, actions, defaultParams) {
      var absolute_url = static_backend_url + base_url;
      defaultParams = defaultParams || {};

      var resourceActions = {};
      Object.keys(actions).forEach(function (actionName) {
        var action = actions[actionName];
        resourceActions[actionName] = angular.extend({cache: true}, action, {url: absolute_url + (action.url || '')});
      });

      return $resource(absolute_url, defaultParams, resourceActions);
    }

    function arrayFirst (data) {
      return angular.fromJson(data)[0];
    }
  });

module.exports = 'static_api';
