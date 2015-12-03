'use strict';

var angular = require('angular');
var DisclsoureService = require('./service');

var disclosure = angular.module('disclosure', []);
disclosure.factory('disclosureApi', function($q, $rootScope) {
  return new DisclsoureService($q, $rootScope);
});

module.exports = disclosure;
