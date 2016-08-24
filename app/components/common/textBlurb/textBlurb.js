'use strict';

var textBlurb = angular.module('textBlurbModule', [])
  .directive('textBlurb', require('./textBlurbDirective.js'));

module.exports = textBlurb;
