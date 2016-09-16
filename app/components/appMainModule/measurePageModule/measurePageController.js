'use strict';

function measurePageController($scope, measure) {
  $scope.city = measure.city; // Hack for breadcrumb
  $scope.measure = measure;

  // For debugging until we have real data
  measure.supporting_count = measure.supporting_count || 7;
  measure.supporting_geos = [
    {name: 'Within Oakland', value: 56},
    {name: 'In-State', value: 28},
    {name: 'Out-of-State', value: 16}
  ];
  
  measure.opposing_count = measure.opposing_count || 7;
  measure.opposing_geos = [
    {name: 'Within Oakland', value: 56},
    {name: 'In-State', value: 28},
    {name: 'Out-of-State', value: 16}
  ];
}

module.exports = measurePageController;
