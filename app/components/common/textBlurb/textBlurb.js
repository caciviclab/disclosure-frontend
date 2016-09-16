'use strict';

var textBlurb = angular.module('textBlurbModule', [])
  .directive('odcaTextBlurb', require('./textBlurbDirective.js'));

module.exports = textBlurb;
