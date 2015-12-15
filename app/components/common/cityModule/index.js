'use strict';

require('../contributionAreaBreakdown');
require('../contributionTypeBreakdown');

var cityModule = angular.module('cityModule', [
    'contributionAreaBreakdown',
    'contributionTypeBreakdown',
    'appMainModule'
  ])
  .controller('cityController', require('./cityController'));

module.exports = cityModule;
