/**
 * committeeContributors/index.js
 *
 * Describes the contributors of a political committee.
 **/

'use strict';

var committeeContributors = angular.module('committeeContributors', [])
  .directive('committeeContributors', require('./committeeContributorsDirective'));

module.exports = committeeContributors;
