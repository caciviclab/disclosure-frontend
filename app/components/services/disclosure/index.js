'use strict';

var DisclosureService = require('./service');

var disclosure = angular.module('disclosure', []);
disclosure.factory('disclosureApi', function($q, $rootScope) {
  return new DisclosureService($q, $rootScope);
});

module.exports = disclosure;
