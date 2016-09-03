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
        toStateReference: '=toState',
        linkDollarAmount: '=dollarAmount',
        avatarImageUrl: '=avatarUrl'
      },
      link: link,
      template: template,
      controller: function () {}
    };
    return directive;

    function link(scope, element, attrs, vm) {
      //TODO: HANDLE ALT TEXT IN AVATAR IMG
    }

  };
})();
