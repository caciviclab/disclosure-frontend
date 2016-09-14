'use strict';

function upcomingElectionsListFactory($http, $q, $log, CONSTANTS) {
  var apiBaseUrl = CONSTANTS.DISCLOSURE_API_BASEURL;

  var selectedItemData = {};

  var service = {
    // getListOfOffices: getListOfOffices
    // getListOfOfficeElections: getListOfOfficeElections,
    getUpcomingElectionData: getUpcomingElectionData,
    getSelectedItemData: getSelectedItemData,  //Add here for now. TODO: review
    storeSelectedItemData: storeSelectedItemData   //Add here for now. TODO: review
  };
  return service;

  function getUpcomingElectionData(localeId) {
    return $http.get(apiBaseUrl + '/locality/' + localeId + '/current_ballot')
        .then(getUpcomingElectionDataComplete)
        .catch(getUpcomingElectionDataFailed);
  }

  function getSelectedItemData() {
    return selectedItemData;
  }

  //CRUD-like function to store data from selected item
  function storeSelectedItemData(selectedItem) {
    selectedItemData = selectedItem;
    $log.info('SELECTED ITEM DATA = ', selectedItemData)
  }

  //CRUD-like function to remove any data stored in memory for a selected item
  function clearSelectedItemData() {
    selectedItemData = {};
    $log.log('cleared selected item = ', selectedItemData);
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
