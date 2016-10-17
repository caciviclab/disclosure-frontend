(function() {
  'use strict';

  var template = require('./pageHeader.html');

  module.exports = function odcaPageHeader() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        lastUpdated: '=',
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
      element.addClass('odca-pageHeader');

    //  TODO: add function to format election date properly

    }
  };
})();
