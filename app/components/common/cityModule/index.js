'use strict';

require('angular-ui-bootstrap');

require('../contributionAreaBreakdown');
require('../contributionTypeBreakdown');

var cityModule = angular.module('cityModule', [
    'contributionAreaBreakdown',
    'contributionTypeBreakdown',
    'appMainModule',
    'ui.bootstrap.tabs'
  ])
  .controller('cityController', require('./cityController'))
  .controller('cityElectionsController', require('./cityElectionsController'));

module.exports = cityModule;
