'use strict';

module.exports = angular.module('measureModule', [
    'appMainModule'
  ])
  .controller('measureController', require('./controllers/measure'))
  .controller('indexController', require('./controllers/index'));
