'use strict';

require('angular-ui-bootstrap');

require('../../common/contributionAreaBreakdown');
require('../../common/contributionTypeBreakdown');

var cityPageModule = angular.module('cityPageModule', [
  'contributionAreaBreakdown',
  'contributionTypeBreakdown',
  'appMainModule',
  'ui.bootstrap.tabs'
])
  .controller('cityController', require('./cityController'))
  .controller('cityElectionsController', require('./cityElectionsController'))
  .config(require('./state'));

module.exports = cityPageModule;
