'use strict';

// Controller naming conventions should start with an uppercase letter
function GlobalSearchBarController($log, globalSearchFactory) {
  //var _selected;
  var vm = this;
  vm.searchResults = [];
  vm.selected = undefined;

//TODO: eventually this should search not only localities, but committees, measures, candidates, etc..
function searchLocalities() {
    return globalSearchFactory.getListOfLocalities()
      .then(function(data) {
        vm.searchResults = data;
        $log.info('LIST OF LOCALITIES = ', vm.searchResults);
        return vm.searchResults;
      });
  }
  searchLocalities();

}

GlobalSearchBarController.$inject = ['$log', 'globalSearchFactory'];
module.exports = GlobalSearchBarController;
