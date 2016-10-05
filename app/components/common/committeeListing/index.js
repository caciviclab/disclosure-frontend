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
      gridWidth = odcaGridElement.offsetWidth;

      // Convert resources to plain old objects to make ag-grid happy
      contributionsObjs = ctrl.contributions.map(function(resource) {
        // Total listed contributions
        ctrl.committeeTotal += resource.Tran_Amt1;

        return {
          Name: getFriendlyName(resource),
          Tran_Amt1: resource.Tran_Amt1,
          Tran_Date: resource.Tran_Date
        };
      });

      ctrl.gridOptions = {
        columnDefs: [
          {
            headerName: 'Contributor',
            field: 'Name',
            filter: 'text',
            width: Math.round(gridWidth * 0.6 * 100) / 100,
            suppressMenu: true
          },
          {
            headerName: 'Amount',
            field: 'Tran_Amt1',
            width: Math.round(gridWidth * 0.2 * 100) / 100,
            cellFormatter: function(params) {
              return $filter('currency')(params.value, '$', 0);
            },
            sort: 'desc',
            suppressMenu: true
          },
          {
            headerName: 'Date',
            field: 'Tran_Date',
            width: Math.round(gridWidth * 0.2 * 100) / 100,
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

      // Combine first and last name, capitalize
      function getFriendlyName(resource) {
        var name = '';
        var names = [];
        if (resource.Tran_NamF) {
          names = names.concat(resource.Tran_NamF.split(' '));
        }
        
        if (resource.Tran_NamL) {
          names = names.concat(resource.Tran_NamL.split(' '));
        }
        
        names.forEach(function(newName) {
          name += _.capitalize(newName);
          name += ' ';
        });
        // Remove the extra space at the end
        return name.substring(0, name.length - 1);
      }

    }



})();
