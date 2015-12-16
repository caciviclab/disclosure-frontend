(function() {
    'use strict';

    // angular.module('campaignFinanceApp')
    //   .filter('spacesToDashes', spacesToDashes);

    module.exports = function spacesToDashes() {
      return function(input) {
        if (input) {
          var stringWithSpacesToRemove = input.replace(/\s+/g, '-');
          return stringWithSpacesToRemove.toLowerCase();
        }
      }
    };
    
    //spacesToDashes.$inject = [];
})();
