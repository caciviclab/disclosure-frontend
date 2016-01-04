'use strict';

require('../../common/measureListing');
require('../../common/measureCommitteeOpposing');
require('../../common/measureCommitteeSupporting');

module.exports = angular.module('measurePageModule', [
  'measureListing',
  'measureCommitteeOpposing',
  'measureCommitteeSupporting'
])
  .controller('measurePageController', require('./measurePageController'))
  .controller('measureCommitteeOpposingPageController', require('./measureCommitteeOpposingPageController'))
  .controller('measureCommitteeSupportingPageController', require('./measureCommitteeSupportingPageController'));
