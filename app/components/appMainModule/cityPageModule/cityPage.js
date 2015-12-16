(function() {
    'use strict';

    var cityPageModule = require('./cityPage');
    var cityPageDirective = require('./cityPageDirective');
    var CityPageController = require('./CityPageController');
    var cityPageFactory = require('./cityPageFactory');

    angular.module('cityPageModule', [
          'ui.router',
          'disclosure'
        ])
        .directive('cityPage', cityPageDirective)
        .controller('CityPageController', CityPageController)
        .factory('cityPageFactory', cityPageFactory);

    module.exports = cityPageModule;
})();
