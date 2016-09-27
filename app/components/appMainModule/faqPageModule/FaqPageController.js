'use strict';

function FaqPageController() {
  var ctrl = this;

  ctrl.content = require('./faqPage.md');
}

FaqPageController.$inject = [];
module.exports = FaqPageController;
