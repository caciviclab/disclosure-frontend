'use strict';

require('angular-ui-bootstrap');

require('../../common/contributionAreaBreakdown');
require('../../common/contributionTypeBreakdown');

var localityPageModule = angular.module('localityPageModule', [
  'contributionAreaBreakdown',
  'contributionTypeBreakdown',
  'appMainModule',
  'ui.bootstrap.tabs'
])
  .controller('localityController', require('./cityController'))
  .controller('localityElectionsController', require('./cityElectionsController'))
  .config(require('./state'));

module.exports = localityPageModule;
