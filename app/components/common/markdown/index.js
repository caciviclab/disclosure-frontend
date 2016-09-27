'use strict';

angular.module('odca.markdown', [])
  .directive('odcaMarkdown', function() {
    return {
      restrict: 'E',
      scope: {
        content: '='
      },
      bindToController: true,
      controller: MarkdownController,
      controllerAs: '$ctrl',
      template: '<div ng-bind-html="$ctrl.content"></div>'
    };
  });

function MarkdownController() {
}

MarkdownController.$inject = [];


module.exports = 'odca.markdown';
