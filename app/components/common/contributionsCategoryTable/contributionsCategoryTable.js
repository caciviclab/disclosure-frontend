(function() {
  'use strict';

  require('../core/core');
  
  require('./../../../../node_modules/ag-grid/dist/styles/theme-material.css');
  require('./../../../../node_modules/ag-grid/dist/styles/ag-grid.css');

  var contributionsCategoryTableDirective = require('./contributionsCategoryTableDirective');
  var ContributionsCategoryTableController = require('./ContributionsCategoryTableController');

  module.exports = angular.module('contributionsCategoryTable', [
      'coreModules',
      'agGrid'
    ])
    .directive('odcaContributionsCategoryTable', contributionsCategoryTableDirective)
    .controller('ContributionsCategoryTableController', ContributionsCategoryTableController);

})();