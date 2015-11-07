'use strict';

var Swagger = require('swagger-client');
var angular = require('angular');

var DISCLOSURE_SWAGGER_SPEC = 'http://admin.caciviclab.org/docs/api-docs';

var disclosure = angular.module('disclosure', []);
disclosure.factory('disclosureApi', function($q, $rootScope) {
  var defer = $q.defer();
  var api = new Swagger({
    url: DISCLOSURE_SWAGGER_SPEC,
    usePromise: true
  }).then(function(api) {
      defer.resolve(api);
  }).catch(function() {
      defer.reject('Failed to build swagger client.');
  }).finally(function() {
      // Trigger promises from outside the angular scope.
      $rootScope.$apply();
  });

  return defer.promise;
});

module.exports = disclosure;
