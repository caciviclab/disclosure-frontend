(function() {
  'use strict';

  var template = require('./contributionsCategoryTable.html');

  module.exports = function odcaContributionsCategoryTable() {
    var directive = {
      restrict: 'EA',
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        contributionsCategory: '@category',
        totalContributions: '@totalContributions',
        contributions: '='
      },
      //link: link,
      template: template,
      controller: function() {
        var vm = this;

        var columnDefs = [  //CHECK
          {headerName: 'Contributor', field: 'name'},
          {headerName: 'Amount', field: 'amount'},
          {headerName: 'Date', field: 'date'}
        ];
        
        console.log('CONTRIBUTIONS =', this.contributions);
        
        vm.gridOptions = {
          columnDefs: columnDefs,
          rowData: this.contributions.data,
          enableSorting: true,
          rowHeight: 45,
          icons: {
            sortAscending: '<i class="fa fa-caret-down"/>',
            sortDescending: '<i class="fa fa-caret-up"/>'
          }
        };
      }
    };
    return directive;

    // function link(scope, element, attrs, vm) {}
  };
})();