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
    domReady: domReady
  };
  return vendor;

  // window.angular = require('angular');
  // require('angular-ui-router');
  // require('angular-animate');
  // require('angular-ui-bootstrap');
  // require('angular-cookies');
  // require('angular-resource');
  // require('angular-sanitize');
  // require('angular-breadcrumb');
  // window.jQuery = require('jquery');
  // require('bootstrap');
  // require('domready');
  // window._ = require('lodash');
  // require('restangular');
  // window.d3 = require('d3');
  // window.c3 = require('./noNpm/c3/c3');
};
