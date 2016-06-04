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
        totalContributions: '=totalContributions',
        contributions: '='
      },
      //link: link,
      template: template,
      controller: function($filter) {
        var vm = this;

        var columnDefs = [  //TODO: CHECK FIELD NAMES
          {headerName: 'Contributor', field: 'name'},
          { headerName: 'Amount',
            field: 'amount',
            sort: 'desc',
            cellRenderer: function(params) {
              var formattedValue;
              //do this for now but check for performance issues with large datasets...
              formattedValue = $filter('currency')(params.data.amount, '$', 0);
              return formattedValue;
            }
          },
          {headerName: 'Date', field: 'date', maxWidth: 86}
        ];
        
        console.log('CONTRIBUTIONS =', this.contributions);
        
        vm.gridOptions = {
          columnDefs: columnDefs,
          rowData: this.contributions.data,
          enableSorting: true,
          rowHeight: 45,
          enableColResize: true,
          suppressMovableColumns: true,
          suppressRowClickSelection: true,
          suppressCellSelection: true,
          angularCompileRows: true, //needed to apply currency filter on 'amount' column
          onGridReady: function(params) {
            params.api.sizeColumnsToFit();
          },
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