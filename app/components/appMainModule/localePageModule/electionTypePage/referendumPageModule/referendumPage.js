'use strict';

/* Common Modules 'referendumPageModule' Depend on */
require('../../../../common/core/core');
var pageHeaderModule = require('../../../../common/pageHeader/pageHeader');
var textBlurbModule = require('../../../../common/textBlurb/textBlurb');

var referendumPageDirective = require('./referendumPageDirective');
var ReferendumPageController = require('./ReferendumPageController');
var referendumPageFactory = require('./referendumPageFactory');

module.exports = angular.module('referendumPageModule',
  [
    'coreModules',
    'pageHeaderModule',
    'textBlurbModule'
  ])
  .directive('referendumPage', referendumPageDirective)
  .controller('ReferendumPageController', ReferendumPageController)
  .factory('referendumPageFactory', referendumPageFactory);