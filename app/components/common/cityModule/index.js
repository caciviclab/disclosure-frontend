'use strict';

var cityModule = angular.module('cityModule', [
    'appMainModule'
  ])
  .controller('cityController', require('./cityController'));

module.exports = cityModule;
