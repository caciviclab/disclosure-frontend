(function() {

  var template = require('./electionTypePage.html');

  module.exports = function localeElectionPage() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'election',
      bindToController: {
        electionType: '=type'
      },
      link: link,
      template: template,
      controller: 'ElectionTypePageController'
    };
    return directive;

    function link(scope, element, attrs, election) {}
  }

})();