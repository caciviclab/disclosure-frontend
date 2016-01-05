/**
 * committeeListing/index.js
 *
 * Describes a single political committee.
 **/

'use strict';

require('../contributionAreaBreakdown');
require('../contributionTypeBreakdown');

var committeeListing = angular.module('committeeListing', [
  'contributionAreaBreakdown',
  'contributionTypeBreakdown'
])
  .directive('committeeListing', require('./committeeListingDirective'));

module.exports = committeeListing;
