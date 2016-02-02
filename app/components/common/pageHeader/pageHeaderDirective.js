(function() {
  'use strict';
  
  var template = require('./pageHeader.html');

  module.exports = function pageHeader() {
    var directive = {
      restrict: 'EA',
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        pageTitle: '@title',
        pageSubtitle: '@subTitle',
        nextElectionDate: '@nextElection'
      },
      link: link,
      template: template,
      controller: function() {} //if access to the controller is needed, add the controller in separate file
    };
    return directive;

    function link(scope, el, attrs, vm) {
      el.addClass('cfa-pageHeader');
    //  TODO: add function to format election date properly
    }
  };
})();