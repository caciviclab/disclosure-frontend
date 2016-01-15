'use strict';

require('./homePageModule/homePage');
require('./appMainModule/appMain');
require('./common/cityModule');
require('./common/committeeModule');

module.exports = angular.module('components', [
  'homePageModule',
  'appMainModule',
  'cityModule',
  'committeeModule'
]);
