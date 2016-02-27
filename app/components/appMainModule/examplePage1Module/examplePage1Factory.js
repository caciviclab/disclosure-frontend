'use strict';

var ExamplePage1Factory = function($http, $q, $log, CONSTANTS) {
  var apiBaseUrl = CONSTANTS.DISCLOSURE_API_BASEURL;

  var service = {
    getPageDataComplete: getPageDataComplete,
    getPageDataFailed: getPageDataFailed,
    getExampleCommittee: getExampleCommittee
  };
  return service;

  function getPageDataComplete(data, status, headers, config) {
    return data.data;
  }

  function getPageDataFailed(e) {
    var newMessage = 'XHR Failed for getPageData';
    if (e.data && e.data.description) {
      newMessage = newMessage + '\n' + e.data.description;
    }
    e.data.description = newMessage;
    $log.error(newMessage);
    return $q.reject(e);
  }

  function getExampleCommittee(committeeId, urlPaths) {
    return $http.get(apiBaseUrl + '/committee/' + committeeId + urlPaths)
      .then(getPageDataComplete)
      .catch(getPageDataFailed);
  }
};

ExamplePage1Factory.$inject = ['$http', '$q', '$log', 'CONSTANTS'];
module.exports = ExamplePage1Factory;
