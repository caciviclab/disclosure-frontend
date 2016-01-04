'use strict';

var measureCommitteeList = angular.module('measureCommitteeList', [])
  .directive('measureCommitteeList', require('./measureCommitteeListDirective'));

module.exports = measureCommitteeList;
