(function() {
  'use strict';

  var template = require('./localePage.html');

  module.exports = function localePage() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'locale',
      bindToController: {
        localeName: '@',
        stats: '='
      },
      //link: link,
      template: template,
      controller: 'LocalePageController'
    };
    return directive;
  };

})();
