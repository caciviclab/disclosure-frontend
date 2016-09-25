'use strict';

function localePageRoutes($stateProvider) {

  var localePage = {
    name: 'appMain.localePage',
    url: '^/:localeType/:localeId/:localeName',   // The ^ character makes this url override the parent url
    // template: '<{{ctrl.localeType}}-page><' + '/' + '{{ctrl.localeType}}' + '-page>',
    // template: '<div ui-view="{{ctrl.localeType}}"></div>',
    template: '<locale-page class="page-fade" locale-name="{{localeCtrl.localeName}}"></locale-page>',
    controller: function($scope, $state, $stateParams) {
      var localeCtrl = this;
      localeCtrl.localeName = $stateParams.localeName;
      localeCtrl.localeType = $stateParams.localeType;
      // this.localeState = $state;
      // console.log('this.localeState = ', this.localeState);
    },
    controllerAs: 'localeCtrl',
    deepStateRedirect: true,
    sticky: true,
    ncyBreadcrumb: {
      // label: 'Locale Page',
      label: '"localeCtrl.localeName"',
      // label: $state.params.localeName,
      // label: '{{this.localeName}}',
      parent: 'appMain'
    },
    data: {
      moduleClasses: 'page', // assign a module class to the <body> tag
      pageClasses: 'localePage', // assign a page-specific class to the <body> tag
      pageTitle: '{{localeCtrl.localeName}}', // set the title in the <head> section of the index.html file
      pageDescription: 'Meta Description goes here' // meta description in <head>
    }
  };

  $stateProvider.state(localePage);

}

localePageRoutes.$inject = ['$stateProvider'];
module.exports = localePageRoutes;
