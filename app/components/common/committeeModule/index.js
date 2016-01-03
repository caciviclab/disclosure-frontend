/**
 * committeeModule/index.js
 *
 * The committee module contains several pages containing information on a
 * single campaign committee.
 **/

'use strict';

require('../contributionAreaBreakdown');
require('../contributionTypeBreakdown');

var committeeModule = angular.module('committeeModule', [
    'contributionTypeBreakdown',
    'appMainModule'
  ])
  .controller('committeeController', require('./controllers/committee'))
  .controller('contributorsController', require('./controllers/contributors'))
  .config(require('./state'));

module.exports = committeeModule;
