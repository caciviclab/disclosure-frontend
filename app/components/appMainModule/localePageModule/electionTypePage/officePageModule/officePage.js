'use strict';

/* Common Modules 'officePageModule' Depend on */
var coreModules = require('../../../../common/core/core');
var pageHeaderModule = require('../../../../common/pageHeader/pageHeader');
var linkList = require('../../../../common/linkList/linkList');

var officePageDirective = require('./officePageDirective');
var OfficePageController = require('./OfficePageController');
var officePageFactory = require('./officePageFactory');

module.exports = angular.module('officePageModule',
  [
    require('../../../../common/candidate'),
    'coreModules',
    'pageHeaderModule',
    'linkList'
  ])
  .directive('officePage', officePageDirective)
  .controller('OfficePageController', OfficePageController)
  .factory('officePageFactory', officePageFactory);
