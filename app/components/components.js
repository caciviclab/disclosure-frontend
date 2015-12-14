'use strict';

require('./homePageModule/homePage');
require('./appMainModule/appMain');
require('./common/cityModule');

module.exports = angular.module('components', [
  'homePageModule',
  'appMainModule',
  'cityModule'
]);
