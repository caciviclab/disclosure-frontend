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
      pageTitle: 'City'
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
      pageTitle: 'State'
    }
  };

  // $stateProvider.state(about);
  $stateProvider.state(city);
  $stateProvider.state(state);

}

appMainRoutes.$inject = ['$stateProvider'];
module.exports = appMainRoutes;
