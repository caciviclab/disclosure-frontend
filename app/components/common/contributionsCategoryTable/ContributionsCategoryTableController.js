'use strict';

var headerCellTemplate = require('./headerCell/headerCellTemplate.html');

function ContributionsCategoryTableController($log, $filter) {
  var vm = this;
  // var contributorData = [];

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
    // {headerName: 'Date', field: 'date', maxWidth: 86, cellClass: 'text-right'}
  ];

  console.log('CONTRIBUTIONS CATEGORY =', vm.contributionsCategory);
  console.log('CONTRIBUTIONS =', vm.contributions);
  
  vm.totalContributionsFormatted = $filter('currency')(vm.totalContributions, '$', 0);

  vm.gridOptions = {
    columnDefs: columnDefs,
    // rowData: rowData
    // rowData: vm.contributions
    // rowData: createRowData(),
    // rowData: null,
    rowData: this.contributions.data,
    // rowData: vm.contributions.data,
    headerCellTemplate: headerCellTemplate,
    enableSorting: true,
    // headerHeight: 52,
    rowHeight: 45,
    enableColResize: true,
    suppressMovableColumns: true,
    suppressRowClickSelection: true,
    suppressCellSelection: true,
    angularCompileRows: true, //needed to apply currency filter on 'amount' column
    onGridReady: function(params) {
      params.api.sizeColumnsToFit();
    }
    // onModelUpdated: onModelUpdated
  };

  // createRowData(this.contributions);
  // function createRowData(data) {
  //   var dataForRows;
  //   dataForRows = data.data; //creates the array
  //   angular.forEach(data, function(contribution){
  //     contributorData.push(contribution);
  //   });
  //   vm.gridOptions.rowData = contributorData;
  //   vm.gridOptions.api.refreshView();
  // }

  //MAYBE NEEDED EXAMPLES:
  //params.setRowCount(5)

  //colDefs.headerClass = '';

  // function sortByAthleteDesc() {
  //   var sort = [
  //     {colId: 'athlete', sort: 'desc'} //NOTE: colId = field  in columnDefs
  //   ];
  //   gridOptions.api.setSortModel(sort);
  // }
}

ContributionsCategoryTableController.$inject = ['$log', '$filter'];
module.exports = ContributionsCategoryTableController;