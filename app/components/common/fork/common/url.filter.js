'use strict';

var angular = require('angular');

angular.module('common.url', [])
  .filter('url', function ($httpParamSerializer, base_url) {
    return urlFilter;

    function urlFilter (path, query) {
      query = query || {};

      // If relative path, prefix it with base_url
      var url = /^https?:\/\//.test(path) ? path : base_url + '/#!' + path;
      var querystring = $httpParamSerializer(query);

      if (querystring) {
        url = url + '?' + querystring;
      }

      return url;
    }
  });

module.exports = 'common.url';
