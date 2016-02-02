'use strict';

var DisclosureService = require('./service');

require('../settings');

var disclosure = angular.module('disclosure', [
  'appMain.settings'
]);

disclosure.factory('disclosureApi', function($q, $rootScope, settings) {
  return new DisclosureService($q, $rootScope, settings.DISCLOSURE_SWAGGER_SPEC);
});

module.exports = disclosure;
