(function() {
  'use strict';

  var template = require('./app.html');

  module.exports = function campaignFinanceApp() {
    return {
      //controller: 'CampaignFinanceAppController', // Called from CampaignFinanceAppController.js
      // controllerAs: 'ctrl',
      //scope: {},
      //bindToController: {},
      restrict: 'E',
      template: template
      //template: '<div ui-view autoscroll="false" id="ui-view"></div>'
    };
  };
})();