(function() {
  'use strict';

  var template = require('./globalSearchBar.html');

  module.exports = function odcaGlobalSearchBar() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        selectFn: '&'
      },
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
