'use strict';

var _ = require('lodash');

function localityPageController($scope, $state, locality) {
  $scope.locality = locality;
}

module.exports = localityPageController;
