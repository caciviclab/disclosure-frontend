'use strict';

var uiRouter = require('angular-ui-router');
var uiRouterExtras = require('ui-router-extras');
var angularAnimate = require('angular-animate');
var angularUiBootstrap = require('angular-ui-bootstrap');
var angularCookies = require('angular-cookies');
var angularResource = require('angular-resource');
var angularSanitize = require('angular-sanitize');
var angularBreadcrumb = require('angular-breadcrumb');
var bootstrap = require('bootstrap');
var domReady = require('domready');
var AgGrid = require('ag-grid');
AgGrid.initialiseAgGridWithAngular1(angular);

module.exports = function() {

  var vendor = {
    uiRouter: uiRouter,
    uiRouterExtras: uiRouterExtras,
    angularAnimate: angularAnimate,
    angularUiBootstrap: angularUiBootstrap,
    angularCookies: angularCookies,
    angularResource: angularResource,
    angularSanitize: angularSanitize,
    angularBreadcrumb: angularBreadcrumb,
    bootstrap: bootstrap,
    domReady: domReady,
    AgGrid: AgGrid
  };

  return vendor;
};
