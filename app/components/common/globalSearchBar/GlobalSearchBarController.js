'use strict';

// Controller naming conventions should start with an uppercase letter
function GlobalSearchBarController($http) {
  //var _selected;
  var vm = this;
  vm.searchResults = [];
  vm.selected = undefined;


}

GlobalSearchBarController.$inject = ['$http'];
module.exports = GlobalSearchBarController;
