'use strict';

require('../contributionTypeBreakdown');

var cityModule = angular.module('cityModule', [
    'contributionTypeBreakdown',
    'appMainModule'
  ])
  .controller('cityController', require('./cityController'));

module.exports = cityModule;
