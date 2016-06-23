(function() {
  'use strict';

  var template = require('./linkList.html');

  module.exports = function odcaLinkList() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        listData: '=listData'
      },
      link: link,
      template: template,
      controller: function() {
        var vm = this;

        vm.listItems = vm.listData;
        console.log('LIST ITEMS = ', vm.listItems);
      }
    };
    return directive;

    function link(scope, element, attrs, vm) {
      // var listTitle = attrs['listTitle'] || null;
    }

  };
})();