'use strict';

require('./measureListing');

module.exports = angular.module('measurePageModule', [
  'measureListing'
])
  .controller('measurePageController', require('./measurePageController'))
  .controller('supportingController', require('./controllers/supporting'))
  .controller('opposingController', require('./controllers/opposing'));
