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
        localeId: '='
      },
      link: link,
      template: template,
      controller: 'UpcomingElectionsListController'
    };
    return directive;

    function link(scope, element, attrs, ctrl) {}
  };
})();
