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
      var ctrl = this;
      ctrl.committeeTotal = 0;
      ctrl.contributionsSearch = '';
      var contributionsObjs;

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
            quickFilterText: '',
            suppressMenuColumnPanel: true,
            suppressMenuFilterPanel: true,
            suppressMenuMainPanel: true,
            width: 600,
            minWidth: 400
          },
          {
            headerName: 'Amount',
            field: 'Tran_Amt1',
            maxWidth: 300,
            width: 200,
            cellFormatter: function(params) {
              return $filter('currency')(params.value, "$", 0);
            },
            sort: 'desc',
            suppressFilter: true,
            suppressMenuColumnPanel: true,
            suppressMenuFilterPanel: true,
            suppressMenuMainPanel: true
          },
          {
            headerName: 'Date',
            field: 'Tran_Date',
            maxWidth: 300,
            width: 200,
            suppressMenuColumnPanel: true,
            suppressMenuFilterPanel: true,
            suppressMenuMainPanel: true,
          }
        ],
        headerHeight: 40,
        enableSorting: true,
        enableFilter: true,
        rowData: contributionsObjs,
        rowHeight: 40,
        suppressCellSelection: true
      };  
    }

})();
