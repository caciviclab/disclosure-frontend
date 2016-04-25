'use strict';

function appMainRoutes($stateProvider) {

  // var cityPage = {
  //     name: 'appMain.cityPage',
  //     abstract: true,  // This makes it so that the url for this route doesn't actually resolve
  //     url: '/city',
  //     template: '<div ui-view></div>', // This injects a new ui-view that the about page directive is injected into
  //     //template: '<city-page city-id="" city-name=""></city-page>',
  //     controller: 'CityPageController'
  // };
  

  var city = {
    name: 'appMain.city',
    url: '^/city', // The ^ character makes this url override the parent url
    template: '<h1>this is a CITY page</h1>',
    //controller: 'ExamplePage1Controller',
    ncyBreadcrumb: {
      label: 'City',
      parent: 'appMain'
    },
    data: {
      moduleClasses: 'page',
      pageClasses: 'city',
      pageTitle: 'City',
      pageDescription: 'Some description.'
    }
  };

  var state = {
    name: 'appMain.state',
    url: '^/state', // The ^ character makes this url override the parent url
    template: '<h1>this is the California STATE page</h1>',
    //controller: 'StatePageController',
    ncyBreadcrumb: {
      label: 'State',
      parent: 'appMain'
    },
    data: {
      moduleClasses: 'page',
      pageClasses: 'state',
      pageTitle: 'State',
      pageDescription: 'Some description.'
    }
  };

  var localePage = {
    name: 'appMain.localePage',
    url: '^/:localeType/:localeId/:localeName',
    // template: '<{{ctrl.localeType}}-page><' + '/' + '{{ctrl.localeType}}' + '-page>',
    template: '<locale-page class="page-fade" locale-name="{{ctrl.localeName}}"></locale-page>',
    controller: function($scope, $stateParams) {
      var ctrl = this;
      ctrl.localeName = $stateParams.localeName;
      // ctrl.localeType = $stateParams.localeType;
      // ctrl.localeType = 'city';
    },
    controllerAs: 'ctrl',
    ncyBreadcrumb: {
      // label: 'Locale Page',
      label: '{{ctrl.localeName}}',
      parent: 'appMain'
    },
    data: {
      moduleClasses: 'page', // assign a module class to the <body> tag
      pageClasses: 'localePage', // assign a page-specific class to the <body> tag
      pageTitle: '{{ctrl.localeName}}', // set the title in the <head> section of the index.html file
      pageDescription: 'Meta Description goes here' // meta description in <head>
    }
  };

  // $stateProvider.state(about);
  $stateProvider.state(city);
  $stateProvider.state(state);
  $stateProvider.state(localePage);

}

appMainRoutes.$inject = ['$stateProvider'];
module.exports = appMainRoutes;
