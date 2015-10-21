(function() {
  'use strict';

  var sfMayor = require('./sfMayor');
  var sfMayorIds = require('./sfMayorIds');
  var sfMayorSr = require('./sfMayorSr');

  
  module.exports = angular.module('apiModule', [])
    .factory('sfMayorIds', sfMayorIds)
    //.factory('sfMayorData', sfMayor)
    .service('sfMayorService', sfMayorSr)
   

})();