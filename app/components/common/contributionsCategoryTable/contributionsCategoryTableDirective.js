(function() {
  'use strict';

  var template = require('./contributionsCategoryTable.html');

  module.exports = function odcaContributionsCategoryTable() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        contributionsCategory: '@category',
        totalContributions: '=totalContributions',
        contributions: '='
      },
      // link: link,
      template: template,
      controller: 'ContributionsCategoryTableController'
    };
    return directive;

    // function link(scope, element, attrs, vm) {}
  };
})();