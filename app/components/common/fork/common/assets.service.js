'use strict';

var angular = require('angular');
var asset_url = 'https://s3-us-west-1.amazonaws.com/odca-candidate-photos/';

angular.module('common.assets', [])
  .factory('assets', function () {
    return {
      asset_for: function (asset_name) {
        return asset_url + asset_name;
      }
    };
  });

module.exports = 'common.assets';
