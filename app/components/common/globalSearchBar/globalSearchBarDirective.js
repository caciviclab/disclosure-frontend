(function() {
  'use strict';

  var template = require('./globalSearchBar.html');

  module.exports = function globalSearchBar() {
    var directive = {
      restrict: 'EA',
      scope: {},
      controllerAs: 'vm',
      bindToController: {},
      //link: link,
      template: template,
      controller: 'GlobalSearchBarController'
    };
    return directive;

    // function link(scope, element, attrs, vm) {
    //   element.addClass('cfa-globalSearchbar');
    // }
  };
})();
