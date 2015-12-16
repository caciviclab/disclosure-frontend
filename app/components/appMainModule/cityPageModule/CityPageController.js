(function() {
    'use strict';

    function CityPageController($scope, cityPageService, $filter) {
        //var ctrl = this;
        //$scope.fips_id = $stateParams.fips_id;
        //$scope.city = $stateParams.city;

        //$scope.cityAsUrl = $filter('spacesToDashes')(cityPageService.location.name);
        $scope.fips_id = cityPageService.location.fip_id;
        $scope.city = cityPageService.location.name;

        //$scope.cityName = cityPageService.location.name;
    }

    CityPageController.$inject = ['$scope', 'cityPageService', '$filter'];
    module.exports = CityPageController;
})();
