(function() {
  'use strict';

  //var searchInNavbarModule = require('./searchInNavbar/searchInNavbar');
  //var appMainNavModule = require('./appMainNav');
  var appMainNavDirective = require('./appMainNavDirective');
  var AppMainNavController = require('./AppMainNavController');
  
  module.exports = angular.module('appMainNavModule', 
    [
      'ui.bootstrap.collapse'
      //'searchInNavbarModule'
      
    ])
    .directive('appMainNav', appMainNavDirective)
    .controller('AppMainNavController', AppMainNavController);

})();