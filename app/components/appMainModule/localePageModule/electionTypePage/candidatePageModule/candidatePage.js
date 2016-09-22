'use strict';

angular.module('candidatePageModule', [
  require('../../../../common/candidate'),
  require('../../../../common/static'),
])
  .config(require('./candidatePageRoutes'));

module.exports = 'candidatePageModule';
