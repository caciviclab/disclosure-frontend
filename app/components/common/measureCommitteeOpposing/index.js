'use strict';

require('../measureCommitteeList');

var measureCommitteeOpposing = angular.module('measureCommitteeOpposing', [
  'measureCommitteeList'
])
  .directive('measureCommitteeOpposing', require('./measureCommitteeOpposingDirective'));

module.exports = measureCommitteeOpposing;
