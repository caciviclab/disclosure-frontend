/* global process */
/*
 * settings
 *
 * Merges settings based on environment.
 */

'use strict';

angular.module('appMain.settings', [])
  .factory('settings', function() {
    var env = process.env.NODE_ENV || 'development';

    // These values come from envify and are injected at build time
    var settings = {
      env: env,
      DISCLOSURE_SWAGGER_SPEC: process.env.DISCLOSURE_SWAGGER_SPEC || 'http://disclosure-backend-static.f.tdooner.com/docs/api-docs/'
    };

    return settings;
  });
