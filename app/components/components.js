'use strict';

require('./homePageModule/homePage');
require('./appMainModule/appMain');
require('./cityModule');

module.exports = angular.module('components', [
  'homePageModule',
  'appMainModule',
  'cityModule'
]);
