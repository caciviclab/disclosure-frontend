(function() {
    'use strict';

    var spacesToDashes = require('./spacesToDashesFilter');

    module.exports = angular.module('spacesToDashesFilter', [])
      .filter('spacesToDashes', spacesToDashes);
})();
