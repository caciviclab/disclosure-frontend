(function() {
    'use strict';

    var template = require('./cityPage.html');

    module.exports = function cityPage() {
      return {
        controller: 'CityPageController',
        controllerAs: 'ctrl',
        bindToController: true,
        restrict: 'E',
        //scope: true,
        // scope: { city: '='},
        scope: {
          city: '@',
          fips_id: '@'
        },
        template: template
      };
    };
})();
