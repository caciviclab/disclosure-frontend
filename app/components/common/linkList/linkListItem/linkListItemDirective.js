/**
 * @ngdoc directive
 * @name linkListItem:odcaLinkListItem
 *
 * @description
 *
 *
 * @restrict A
 * */
(function() {
  'use strict';
  var template = require('./linkListItem.html');

  module.exports = function odcaLinkListItem() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        linkTitle: '=linkTitle',
        linkSubTitle: '=subTitle',
        linkUrl: '=linkUrl',
        linkDollarAmount: '=dollarAmount',
        avatarImageUrl: '=avatarUrl'
      },
      link: link,
      template: template,
      controller: function () {
      }
    };
    return directive;

    function link(scope, element, attrs, vm) {
      //TODO: HANDLE ALT TEXT IN AVATAR IMG

      // var parent = element.parent(); //parent.addClass

      // if (vm.avatarImageUrl && vm.avatarImageUrl !== null || undefined) {
      //   var mainContentBlock = angular.element(element[0].querySelector('.odca-linkListItem-innerContainer'));
      //   console.log('CONTENT BLOCK = ', mainContentBlock);
      //   mainContentBlock.addClass('odca-linkListItem-leftSpacer');
      // }

      // if(!vm.avatarImageUrl) {v
      //
      // }
    }

  };
})();
