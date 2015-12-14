'use strict';

module.exports = angular.module('measureModule', [
    'appMainModule'
  ])
  .controller('measureController', require('./measureController'));
