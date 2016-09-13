'use strict';

function localePageRoutes($stateProvider) {

  var localePage = {
    name: 'appMain.localePage',
    url: '^/:localeType/:localeId/:localeName',   // The ^ character makes this url override the parent url
    // template: '<{{ctrl.localeType}}-page><' + '/' + '{{ctrl.localeType}}' + '-page>',
    // template: '<div ui-view="{{ctrl.localeType}}"></div>',
    template: '<locale-page class="page-fade" locale-name="{{ctrl.localeName}}"></locale-page>',
    controller: function($scope, $stateParams) {
      var ctrl = this;
      ctrl.localeName = $stateParams.localeName;
      ctrl.localeType = $stateParams.localeType;
    },
    controllerAs: 'ctrl',
    deepStateRedirect: true,
    sticky: true,
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

  $stateProvider.state(localePage);

}

localePageRoutes.$inject = ['$stateProvider'];
module.exports = localePageRoutes;