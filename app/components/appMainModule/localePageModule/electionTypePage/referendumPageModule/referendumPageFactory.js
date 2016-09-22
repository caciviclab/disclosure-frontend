'use strict';

var referendumPageFactory = function($log, $q, static_api, CONSTANTS) {
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
    return static_api.referendum.get({referendum_id: referendumId}).$promise
      .then(function (data) {
        referendumPageData.metaData = data;
        $log.info('data from getReferendumMetaData() = ', referendumPageData.metaData);
        return referendumPageData.metaData;
      })
      .catch(getReferendumDataFailed);
  }

  function getReferendumPageData() {
    return referendumPageData;
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

referendumPageFactory.$inject = ['$log', '$q', 'static_api', 'CONSTANTS'];
module.exports = referendumPageFactory;
