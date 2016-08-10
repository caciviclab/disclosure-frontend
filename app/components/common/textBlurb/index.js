'use strict';

var textBlurb = angular.module('textBlurbModule', ['ui.bootstrap'])
  .directive('textBlurb', require('./textBlurbDirective.js'));

module.exports = textBlurb;
