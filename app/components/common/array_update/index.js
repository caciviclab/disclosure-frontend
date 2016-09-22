'use strict';

angular.module('odca.array_update', [])
  .factory('array_update', function () {
    return array_update;

    // Replace the entire array contents with the updated array.
    function array_update (array, data) {
      Array.prototype.splice.apply(array, [0, array.length].concat(data));
    }
  });


module.exports = 'odca.array_update';
