'use strict';

// Controller naming conventions should start with an uppercase letter
function GlobalSearchBarController($log, $state, $filter, globalSearchFactory) {
  //var _selected;
  var vm = this;
  vm.state = $state;
  vm.searchResults = [];
  vm.selected = undefined;

  vm.selectFn = function(item, model, label, event) {
    $log.info('SELECTED = ', item, model, label, event);
    var itemNameFormatted = $filter('lowercase')(item.name);
    // $state.go('appMain.cityPage');
    // $state.go('appMain.cityPage', {cityId:item.id});
    // $state.go('appMain.localePage', {localeType:item.type, localeId:item.id});
    $state.go('appMain.localePage', {localeType:item.type, localeId:item.id, localeName: itemNameFormatted});
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
