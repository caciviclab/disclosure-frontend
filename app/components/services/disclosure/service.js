'use strict';

var _ = require('lodash');
var Swagger = require('swagger-client');

var DISCLOSURE_SWAGGER_SPEC = 'http://admin.caciviclab.org/docs/api-docs/';

function DisclosureService($q, $rootScope) {
  this.$rootScope = $rootScope;
  this.$q = $q;

  var defer = $q.defer();
  this.ready = defer.promise;
  this.swagger = new Swagger({
    url: $rootScope.swaggerSpec || DISCLOSURE_SWAGGER_SPEC,
    success: function() {
      $rootScope.$apply(function() {
        defer.resolve();
      });
    },
    failure: function(err) {
      var error = new Error('Failed to fetch swagger spec: ' + (err.stack || err.toString()));
      console.error(error);
      $rootScope.$apply(function() {
        defer.reject(error);
      });
    }
  });

  this.initialize();
}

DisclosureService.prototype = {
  initialize: function() {
    var self = this;
    function setupProxy(namespace, method) {
      self[namespace] = self[namespace] || {};
      self[namespace][method] = function(params, options) {
        return self._proxy.call(self, namespace, method, params, options);
      };
    }

    setupProxy('contributions', 'list');
    setupProxy('contributions', 'retrieve');
    setupProxy('elections', 'list');
    setupProxy('locations', 'get');
    setupProxy('search', 'get');
  },

  // Proxies the swagger function in an angular promise
  _proxy: function(namespace, method, params, options) {
    // Set defaults
    params = params || {};
    options = _.defaults(options || {}, {responseContentType: 'application/json'});

    var swagger = this.swagger;
    var $q = this.$q;
    var $rootScope = this.$rootScope;
    // Swagger builds async, unfortunately
    return this.ready.then(function() {
        return $q(function(resolve, reject) {
          swagger[namespace][method].call(swagger, params, options,
            function(resp) {
              $rootScope.$apply(function() {
                resolve(resp.obj);
              });
            },
            function(err) {
              $rootScope.$apply(function() {
                reject(err);
              });
            });
        });
      });
  }
};

module.exports = DisclosureService;
