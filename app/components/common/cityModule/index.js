'use strict';

require('angular-ui-bootstrap');

var cityModule = angular.module('cityModule', [
    'appMainModule',
    'ui.bootstrap.tabs'
  ])
  .controller('cityController', require('./cityController'));

module.exports = cityModule;
