'use strict';

require('./measureListing');
require('./measureCommitteeOpposing');
require('./measureCommitteeSupporting');

module.exports = angular.module('measurePageModule', [
  'measureListing',
  'measureCommitteeOpposing',
  'measureCommitteeSupporting'
])
  .controller('measurePageController', require('./measurePageController'))
  .controller('measureCommitteeOpposingPageController', require('./measureCommitteeOpposingPageController'))
  .controller('measureCommitteeSupportingPageController', require('./measureCommitteeSupportingPageController'));
