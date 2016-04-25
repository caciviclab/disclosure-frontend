'use strict';

function appMainRoutes($stateProvider) {

  var city = {
    name: 'appMain.localePage.city',
    // url: '^/city', // The ^ character makes this url override the parent url
    template: '<h1>this is a CITY page</h1>',
    //controller: 'CityPageController',
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

  // $stateProvider.state(localePage);
  $stateProvider.state(city);

}

appMainRoutes.$inject = ['$stateProvider'];
module.exports = appMainRoutes;