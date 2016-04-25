'use strict';

var localePageFactory = function($log, $http, CONSTANTS) {
  var apiBasePath = CONSTANTS.DISCLOSURE_API_BASEURL;
  var apiEndpoint = '/locality';

  var localePageData = {};

  var service = {
    getLocalePageData: getLocalePageData,
    getMetaDataForPage: getMetaDataForPage
    // getLocalePageMetaData: getLocalePageMetaData,
    // setLocalePageMetaData: setLocalePageMetaData
  };
  return service;


  function getLocalePageData(localeId) {
    return getMetaDataForPage(localeId).then(function (data) {
      // localePageData.metaData = data;
      localePageData = data;
      $log.info('data from getMetaDataForPage() = ', localePageData);
      return localePageData;
    });
  }

  function getMetaDataForPage(localeId) {
    return $http.get(apiBasePath + apiEndpoint + '/' + localeId)
      .then(getDataComplete)
      .catch(getMetaDataFailed);
  }

  // function getDataComplete(data, status, headers, config) {
  function getDataComplete(data) {
    return data.data;
  }

  function getMetaDataFailed(e) {
    var newMessage = 'XHR Failed for getPageData';
    if (e.data && e.data.description) {
      newMessage = newMessage + '\n' + e.data.description;
    }
    e.data.description = newMessage;
    $log.error(newMessage);
    return $q.reject(e);
  }

};

localePageFactory.$inject = ['$log', '$http', 'CONSTANTS'];
module.exports = localePageFactory;