  /**
   * committeeListing/index.js
   *
   * Describes a single political committee.
   **/

   (function() {
    'use strict';

    angular
    .module('committeeListing',[])
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
      var contributionsObjs,
          gridWidth;

      var ctrl = this;
      ctrl.committeeTotal = 0;
      ctrl.contributionsSearch = '';

      // ag-grid requires fixed widths in pixels. Calculating them here to take all available space
      var odcaGridElement = document.querySelectorAll('.odca-grid')[0];
      var gridWidth = odcaGridElement.offsetWidth;

      // Convert resources to plain old objects to make ag-grid happy
      contributionsObjs = ctrl.contributions.map(function(resource) {
        ctrl.committeeTotal += resource.Tran_Amt1;
        return {
          Tran_NamL: resource.Tran_NamL,
          Tran_Amt1: resource.Tran_Amt1,
          Tran_Date: resource.Tran_Date
        };
      });      

      ctrl.gridOptions = {
        columnDefs: [
          {
            headerName: 'Contributor',
            field: 'Tran_NamL',
            filter: 'text',
            width: Math.round(gridWidth * .6 * 100)/100,
            suppressMenu: true
          },
          {
            headerName: 'Amount',
            field: 'Tran_Amt1',
            width: Math.round(gridWidth * .2 * 100)/100,
            cellFormatter: function(params) {
              return $filter('currency')(params.value, "$", 0);
            },
            sort: 'desc',
            suppressMenu: true
          },
          {
            headerName: 'Date',
            field: 'Tran_Date',
            width: Math.round(gridWidth * .2 * 100)/100,
            suppressMenu: true
          }
        ],
        headerHeight: 40,
        enableSorting: true,
        enableFilter: true,
        rowData: contributionsObjs,
        rowHeight: 40,
        suppressMovableColumns: true
      };
    }

})();
