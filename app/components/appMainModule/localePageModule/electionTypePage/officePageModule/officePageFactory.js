'use strict';

var officePageFactory = function($log, $http, $q, CONSTANTS) {
  var apiBasePath = CONSTANTS.DISCLOSURE_API_BASEURL;
  var apiEndpoint = '/office_election';

  var officePageData = {};

  var service = {
    getListOfCandidatesForOffice: getListOfCandidatesForOffice
    // getOfficePageData: getOfficePageData
  };
  return service;

  function getListOfCandidatesForOffice(officeElectionId) {
    return $http.get(apiBasePath + apiEndpoint + '/' + officeElectionId)
      .then(getOfficeDataComplete)
      // .then(storeOfficeData('metaData', data))
      .then(function (data) {
        officePageData = data;
        $log.info('data from getOfficeMetaData() = ', officePageData);
        return officePageData;
      })
      .catch(getOfficeDataFailed);
  }

  function getOfficeDataComplete(data) {
    return data.data;
  }

  function getOfficeDataFailed(e) {
    var newMessage = 'XHR Failed for getOfficePageData';
    if (e.data && e.data.description) {
      newMessage = newMessage + '\n' + e.data.description;
    }
    e.data.description = newMessage;
    $log.error(newMessage);
    return $q.reject(e);
  }
  
  // function storeOfficeData(objectTitle, dataObjectToStore) {
  //   officePageData[objectTitle] = dataObjectToStore;
  // }

  // function getOfficePageData() {
  //   return officePageData;
  // }

};

officePageFactory.$inject = ['$log', '$http', '$q', 'CONSTANTS'];
module.exports = officePageFactory;