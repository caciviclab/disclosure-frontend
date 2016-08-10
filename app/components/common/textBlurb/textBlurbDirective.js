/**
 * textBlurbDirective.js
 *
 * A text box with a heading, and a read more link that expands the box to show the full contents
 **/
(function() {
  'use strict';
  
  textBlurbDirective.$inject = ['$window'];
  function textBlurbDirective($window) {
    var directive = {
      restrict: 'E',
      bindToController: {
        title: '@',
        body: '@',
      },
      link: link,
      controller: function() {},
      controllerAs: 'textBlurb',
      template: require('./textBlurb.html')
    };

    return directive;

    //////////////////////////////
    function link(scope, element, attrs, textBlurb) {
      textBlurb.isCollapsed = true;
      
      scope.$watch(function() {return textBlurb.body; }, refreshButtons);
      angular.element($window).bind('resize', refreshButtons);

      function refreshButtons() {
        textBlurb.showButtons = shouldShowButtons();
        scope.$digest(); //since you're outside of angular, you need this here to update the view 
      }

      // Determine if the height of the inner box is greater than
      // the height of the container
      function shouldShowButtons() {
        var innerElementHeight, outerElementHeight;
        if (!textBlurb.isCollapsed) {
          return true;
        }
        outerElementHeight = element.find('div')[1].offsetHeight;
        innerElementHeight = element.find('div')[2].offsetHeight;

        return outerElementHeight < innerElementHeight;
      }
    }

  }

  module.exports = textBlurbDirective;

})();
