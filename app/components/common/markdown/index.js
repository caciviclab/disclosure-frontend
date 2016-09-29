'use strict';

angular.module('odca.markdown', [])
  .directive('odcaMarkdown', ['$location', function($location) {
    return {
      restrict: 'E',
      scope: {
        content: '=',
        withAnchors: '@'
      },
      bindToController: true,
      controller: MarkdownController,
      controllerAs: '$ctrl',
      // Angular will sanitize the html here. If needed, we can mark it trusted
      // since it's controlled by us.
      template: '<div ng-bind-html="$ctrl.content"></div>',
      link: link
    };

    function link(scope, element, attrs, ctrl) {
      scope.$watch('$ctrl.content', function() {
        if (!ctrl.withAnchors) {
          return;
        }

        // Add anchor tags to headings
        angular.forEach(['h2', 'h3', 'h4', 'h5', 'h6'], function(tag) {
          angular.forEach(element.find(tag), function(heading) {
            var $heading = angular.element(heading);
            var headingSlug = $heading.text().toLowerCase().replace(/[^a-z0-9_]+/g, '-').replace(/^-|-$/,'');

            $heading.prepend('<a href="#!' + $location.path() + '#' + headingSlug + '"><span class="fa fa-link"></span></a>');
            $heading.addClass('heading-anchor');
            $heading.attr('id', headingSlug);
          });
        });
      });
    }
  }]);

function MarkdownController() {
}

MarkdownController.$inject = [];


module.exports = 'odca.markdown';
