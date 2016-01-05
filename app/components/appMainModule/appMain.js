'use strict';

var aboutPageModule = require('./aboutPageModule/aboutPage');
var cityPageModule = require('./cityPageModule');
var committeePageModule = require('./committeePageModule');
var examplePage1Module = require('./examplePage1Module/examplePage1');
var faqPageModule = require('./faqPageModule/faqPage');
var measurePageModule = require('./measurePageModule');

var appMainDirective = require('./appMainDirective');
var AppMainController = require('./AppMainController');

module.exports = angular.module('appMainModule',
  [
    'pageHeaderBreadcrumbsModule',
    'examplePage1Module',
    'aboutPageModule',
    'cityPageModule',
    'committeePageModule',
    'faqPageModule',
    'measurePageModule'
  ])
  .directive('appMain', appMainDirective)
  .controller('AppMainController', AppMainController);
