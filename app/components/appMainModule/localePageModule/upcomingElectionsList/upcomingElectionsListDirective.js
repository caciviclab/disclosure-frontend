(function() {
  'use strict';

  var template = require('./upcomingElectionsList.html');

  module.exports = function localeUpcomingElectionsList() {
    var directive = {
      restrict: 'E',
      priority: 0,
      scope: {},
      controllerAs: 'ctrl',
      bindToController: {
        // ballotData: '=ballotData'
        localeId: '=',
        localeType: '='
      },
      link: link,
      template: template,
      controller: 'UpcomingElectionsListController'
    };
    return directive;

    function link(scope, element, attrs, ctrl) {}
  };
})();
