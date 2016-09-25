'use strict';

var angular = require('angular');

angular.module('odca.candidates.photo', [
  require('../assets')
])
  .filter('candidate_photo', function (assets) {
    return candidatePhoto;

    function candidatePhoto (candidate) {
      if (candidate.photo_url) {
        return candidate.photo_url;
      }

      return assets.asset_for('no-image.png');
    }
  });

module.exports = 'odca.candidates.photo';
