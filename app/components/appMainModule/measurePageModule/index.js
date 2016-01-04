'use strict';

require('./measureListing');
require('./measureCommitteeOpposing');

module.exports = angular.module('measurePageModule', [
  'measureListing',
  'measureCommitteeOpposing'
])
  .controller('measurePageController', require('./measurePageController'))
  .controller('measureCommitteeOpposingPageController', require('./measureCommitteeOpposingPageController'))
  .controller('supportingController', require('./controllers/supporting'));
