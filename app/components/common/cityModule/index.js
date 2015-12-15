'use strict';

var cityModule = angular.module('cityModule', [])
  .controller('cityController', require('./cityController'));

module.exports = cityModule;
