'use strict';

angular.module('candidatePageModule', []) // cheating here, the campaignFinanceApp has already pulled in our dependencies
  .config(require('./candidatePageRoutes'));

module.exports = 'candidatePageModule';
