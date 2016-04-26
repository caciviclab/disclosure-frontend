(function() {
  'use strict';

  var template = require('./pageHeader.html');

  module.exports = function odcaPageHeader() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        pageTitle: '@pageTitle',
        pageSubtitle: '@subTitle',
        nextElectionDate: '@nextElection'
      },
      link: link,
      template: template,
      controller: function() {} //if access to the controller is needed, add the controller in separate file
    };
    return directive;

    function link(scope, element, attrs, vm) {
      element.addClass('cfa-pageHeader');
      
      var htmlItems = element.children();
      function removeItem(item, index) {
        if (!item) {
          htmlItems.eq(index).remove();
        }
      }

      removeItem(vm.pageTitle, 0);
      removeItem(vm.pageSubtitle, 1);
      removeItem(vm.nextElectionDate, 2);

    //  TODO: add function to format election date properly
    }
  };
})();
