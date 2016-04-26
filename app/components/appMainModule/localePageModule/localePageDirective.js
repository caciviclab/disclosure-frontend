(function() {
  'use strict';

  var template = require('./localePage.html');

  module.exports = function localePage() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'ctrl',
      bindToController: {
        localeName: '@'
        // uiStateName: '=',
        // localeType: '='
        //onStateLoad: '&'
      },
      //link: link,
      template: template,
      controller: 'LocalePageController'
    };
    return directive;
  };

})();