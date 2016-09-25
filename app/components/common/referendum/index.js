'use strict';

var angular = require('angular');

angular.module('referendum', [
  require('./referendum_money.comp'),
  require('../url')
]);


module.exports = 'referendum';
