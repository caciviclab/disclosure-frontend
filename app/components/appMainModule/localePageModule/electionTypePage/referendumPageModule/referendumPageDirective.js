(function() {
  'use strict';

  var template = require('./referendumPage.html');

  module.exports = function referendumPage() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'referendum',
      bindToController: {
        referendumId: '@',
        referendumData: '='
      },
      link: link,
      template: template,
      controller: 'ReferendumPageController'
    };
    return directive;

    function link(scope, element, attrs, referendum) {}
  };

})();
