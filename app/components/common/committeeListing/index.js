  /**
   * committeeListing/index.js
   *
   * Describes a single political committee.
   **/

(function() {
  'use strict';

   angular
   .module('committeeListing', ['agGrid'])
   .directive('committeeListing', committeeListingDirective);

   function committeeListingDirective() {
    return {
      restrict: 'E',
      template: require('./committeeListing.html'),
      controller: committeeListingController,
      controllerAs: '$ctrl',
      bindToController: true,
      scope: {
        committee: '=',
        contributions: '=',
      }
    };
  }

  committeeListingController.$inject = ['$filter'];
  function committeeListingController($filter) {
    var ctrl = this;
    ctrl.committeeTotal = 0;
    var contributionsObjs;

    // Convert resources to plain old objects to make ag-grid happy
    contributionsObjs = ctrl.contributions.map(function(resource) {
      ctrl.committeeTotal += resource.Tran_Amt1;
      return {
        Tran_NamL: resource.Tran_NamL,
        Tran_Amt1: $filter('currency')(resource.Tran_Amt1, "$", 0),
        Tran_Date: resource.Tran_Date
      };
    });

    ctrl.gridOptions = {
      columnDefs: [
      {headerName: 'Contributor', field: 'Tran_NamL'},
      {headerName: 'Amount', field: 'Tran_Amt1'},
      {headerName: 'Date', field: 'Tran_Date'}
      ],
      enableSorting: true,
      enableFilter: true,
      rowData: contributionsObjs
    };  
  }

})();
