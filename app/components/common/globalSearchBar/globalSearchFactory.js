'use strict';

var globalSearchFactory = function($http, $q, $log, CONSTANTS) {
  var apiBaseUrl = CONSTANTS.DISCLOSURE_API_BASEURL;

  var service = {
    //getSearchData: getSearchData,
    getListOfLocalities: getListOfLocalities,
    getSearchDataComplete: getSearchDataComplete,
    getSearchDataFailed: getSearchDataFailed
  };
  return service;

  //TODO: get all data to search, not just localities

  function getListOfLocalities() {
    return $http.get(apiBaseUrl + '/locality/search/')
      .then(getSearchDataComplete)
      .catch(getSearchDataFailed);
  }

  // function getSearchDataComplete(data, status, headers, config)
  function getSearchDataComplete(data) {
    return data.data;
  }
  
  function getSearchDataFailed() {
    console.log('search data failed');
  }
};

globalSearchFactory.$inject = ['$http', '$q', '$log', 'CONSTANTS'];
module.exports = globalSearchFactory;