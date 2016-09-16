'use strict';

var referendumPageFactory = function($log, $http, $q, CONSTANTS) {
  var apiBasePath = CONSTANTS.DISCLOSURE_API_BASEURL;
  var apiEndpoint = '/referendum';

  var referendumPageData = {};
  referendumPageData.metaData = {};

  var service = {
    getReferendumMetaData: getReferendumMetaData,
    getReferendumPageData: getReferendumPageData
  };
  return service;

  function getReferendumMetaData(referendumId) {
    return $http.get(apiBasePath + apiEndpoint + '/' + referendumId)
      .then(getReferendumDataComplete)
      // .then(storeReferendumData('metaData', data))
      .then(function (data) {
        referendumPageData.metaData = data;
        $log.info('data from getReferendumMetaData() = ', referendumPageData.metaData);
        return referendumPageData.metaData;
      })
      .catch(getReferendumDataFailed);
  }

  // function storeReferendumData(objectTitle, dataObjectToStore) {
  //   referendumPageData[objectTitle] = dataObjectToStore;
  // }

  function getReferendumPageData() {
    return referendumPageData;
  }

  function getReferendumDataComplete(data) {
    return data.data;
  }

  function getReferendumDataFailed(e) {
    var newMessage = 'XHR Failed for getReferendumPageData';
    if (e.data && e.data.description) {
      newMessage = newMessage + '\n' + e.data.description;
    }
    e.data.description = newMessage;
    $log.error(newMessage);
    return $q.reject(e);
  }
};

referendumPageFactory.$inject = ['$log', '$http', '$q', 'CONSTANTS'];
module.exports = referendumPageFactory;