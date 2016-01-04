'use strict';

require('../measureCommitteeList');

var measureCommitteeSupporting = angular.module('measureCommitteeSupporting', [
  'measureCommitteeList'
])
  .directive('measureCommitteeSupporting', require('./measureCommitteeSupportingDirective'));

module.exports = measureCommitteeSupporting;
