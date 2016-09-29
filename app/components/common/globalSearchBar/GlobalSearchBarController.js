'use strict';

function GlobalSearchBarController($log, $state, $filter, globalSearchFactory) {
  var vm = this;
  vm.state = $state;
  vm.searchResults = [];
  vm.selected = undefined;

  vm.selectFn = function(item) {
    var itemNameFormatted = $filter('lowercase')(item.name);
    $state.go('appMain.localePage.index', {localeType:item.type, localeId:item.id, localeName: itemNameFormatted});
  };

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

GlobalSearchBarController.$inject = ['$log', '$state', '$filter', 'globalSearchFactory'];
module.exports = GlobalSearchBarController;
