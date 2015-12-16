(function() {
    'use strict';

    /* @ngInject */
    function cityPageFactory(disclosureApi, $stateParams) {
        var service = {
            getCityName: getCityName
        };

        return service;

        function getCityName() {
          return disclosureApi.locations.get({fips_id: $stateParams.fips_id});
        }
    }

    cityPageFactory.$inject = ['disclosureApi', '$stateParams'];
    module.exports = cityPageFactory;
})();
