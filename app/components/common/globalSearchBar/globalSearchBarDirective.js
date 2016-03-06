(function() {
  'use strict';

  var template = require('./globalSearchBar.html');

  module.exports = function globalSearchBar() {
    var directive = {
      restrict: 'EA',
      scope: {},
      controllerAs: 'vm',
      bindToController: {
      },
      //link: link,
      template: template,
      controller: function() {} //if access to the controller is needed, add the controller in separate file
    };
    return directive;

    // function link(scope, element, attrs, vm) {
    //   element.addClass('cfa-globalSearchbar');
    // }
  };
})();
