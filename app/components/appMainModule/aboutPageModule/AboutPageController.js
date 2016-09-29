'use strict';

function AboutPageController() {
  var ctrl = this;

  ctrl.content = require('./aboutPage.md');
}

AboutPageController.$inject = [];


module.exports = AboutPageController;
