'use strict';

  /**
   * @ngdoc controller
   * @name localePageModule:LocalePageController
   *
   * @description
   *
   *
   * @requires $scope
   * */
   
  // function LocalePageController($log, $state, localePageService) {
  function LocalePageController($log, $state, $stateParams, localePageFactory) {
    var pageMetaData = {};
    
    var ctrl = this;
    ctrl.state = $state;
    // ctrl.localeName = $state.params.localeName;
    // ctrl.localeId = $state.params.localeId;
    ctrl.localeName = $stateParams.localeName;
    ctrl.localeId = $stateParams.localeId;
    ctrl.testType = localePageFactory.getLocalePageData(ctrl.localeId).type;

    console.log('TEST TYPE = ', ctrl.testType);
    

    // ctrl.localeName = localePageService.localeName;

    
    // ctrl.localeType = ctrl.state.localeType;
    // ctrl.localeType = pageMetaData.localeType;

    // if (ctrl.localeType === '' || null || undefined) {
    //   console.log('manually loading data');
    //   ctrl.manuallyLoadMetaData(ctrl.localeId);
    // }

    activate();

    function activate() {
    // ctrl.activate = function() {
    //   return localePageFactory.getMetaDateForPage(ctrl.localeId)
      return localePageFactory.getLocalePageData(ctrl.localeId)
        .then(function(data) {
          pageMetaData = data;
          // ctrl.localeType = pageMetaData.localeType;
          ctrl.localeType = pageMetaData.type;
          $log.info('PAGE META DATA! = ', pageMetaData);
        });
    }
    //
    // ctrl.manuallyLoadMetaData = function(localeId) {
    //   return localePageFactory.getLocalePageData(localeId)
    //     .then(function(data) {
    //       pageMetaData = data;
    //       $log.info('PAGE META DATA! = ', pageMetaData);
    //     });
    // };
    // ctrl.localeType = localePageService.metaData.type;
    $log.info('LOCALE TYPE = ', ctrl.localeType);



    // ctrl.onStateLoad = function(name, type, id) {
    //   var metaData = {};
    //   metaData.locale.name = name;
    //   return metaData;
    // }
    
    // ctrl.localeMeta = localePageService;
    // $log.info('LOCALE META = ', ctrl.localeMeta);

    ctrl.pageParams = $state.params;
    $log.info('LOCALE META = ', ctrl.pageParams);

    // ctrl.pageData = $stateParams;
    ctrl.pageData = $state.current;
    $log.info('LOCALE PAGE DATA = ', ctrl.pageData);
    
    // ctrl.pageElement = '<' + ctrl.localeType + '-page><' + '/' + ctrl.localeType + '-page>';

    // ctrl.localeName = localeName;
    // // ctrl.localeName = localePageService.localeName;
    // $log.info('LOCALE NAME = ', ctrl.localeName);

    // function getAlamedaData() {
  }

  LocalePageController.$inject = ['$log', '$state', '$stateParams', 'localePageFactory'];
  // LocalePageController.$inject = ['$log', '$state', 'localePageService'];
  module.exports = LocalePageController;
