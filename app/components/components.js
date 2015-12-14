'use strict';

require('./homePageModule/homePage');
require('./appMainModule/appMain');
require('./common/cityModule');
require('./common/measureModule');

module.exports = angular.module('components', [
  'homePageModule',
  'appMainModule',
  'cityModule',
  'measureModule'
]);
