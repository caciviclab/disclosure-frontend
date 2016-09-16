(function() {
  'use strict';

  var template = require('./officePage.html');

  module.exports = function officePage() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'office',
      bindToController: {
        officeId: '@',
        officeData: '='
      },
      link: link,
      template: template,
      controller: 'OfficePageController'
    };
    return directive;

    function link(scope, element, attrs, office) {}
  }

})();