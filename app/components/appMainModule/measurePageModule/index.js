'use strict';

require('../../common/measureListing');
require('../../common/measureCommitteeOpposing');
require('../../common/measureCommitteeSupporting');

module.exports = angular.module('measurePageModule', [
  'ui.router',
  'measureListing',
  'measureCommitteeOpposing',
  'measureCommitteeSupporting'
])
  .controller('measurePageController', require('./measurePageController'))
  .controller('measureCommitteeOpposingPageController', require('./measureCommitteeOpposingPageController'))
  .controller('measureCommitteeSupportingPageController', require('./measureCommitteeSupportingPageController'))
  .config(require('./state'));
