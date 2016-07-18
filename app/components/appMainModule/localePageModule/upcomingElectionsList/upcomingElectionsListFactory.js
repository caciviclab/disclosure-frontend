'use strict';

function upcomingElectionsListFactory($http, $q, $log, CONSTANTS) {
  var apiBaseUrl = CONSTANTS.DISCLOSURE_API_BASEURL;

  var service = {
    // getListOfOffices: getListOfOffices
    // getListOfOfficeElections: getListOfOfficeElections,
    getUpcomingElectionData: getUpcomingElectionData
  };
  return service;

  function getUpcomingElectionData(localeId) {
    return $http.get(apiBaseUrl + '/locality/' + localeId + '/current_ballot')
        .then(getUpcomingElectionDataComplete)
        .catch(getUpcomingElectionDataFailed);
  }

  function getUpcomingElectionDataComplete(data) {
    return data.data;
  }

  function getUpcomingElectionDataFailed() {
    $log.error('get ballot data failed');
  }
}

upcomingElectionsListFactory.$inject = ['$http', '$q', '$log', 'CONSTANTS'];
module.exports = upcomingElectionsListFactory;
