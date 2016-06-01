(function() {
  'use strict';

  require('../core/core');
  
  var AgGrid = require('../../../../node_modules/ag-grid/dist/ag-grid.noStyle');

  var contributionsCategoryTableDirective = require('./contributionsCategoryTableDirective');

  AgGrid.initialiseAgGridWithAngular1(angular);

  module.exports = angular.module('contributionsCategoryTable', [
      'coreModules',
      'agGrid'
    ])
    .directive('odcaContributionsCategoryTable', contributionsCategoryTableDirective);

})();