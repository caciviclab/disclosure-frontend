'use strict';

/**
 * @ngdoc controller
 * @name officePageModule:OfficePageController
 *
 * @description
 *
 *
 * @requires $log, $state, officePageFactory
 * */

function OfficePageController($log, $state, officePageFactory) {
  // var uiRouterParams = localeStateDataStore.getStateData();
  // var officePageData = officePageFactory.getOfficePageData();
  var officePageData = {};

  var office = this;
  office.state = $state;
  office.officeTypeId = $state.params.electionTypeId;

  office.candidatesList = [];
  // office.officeData = officePageData;

  activate();
  function activate() {
    return officePageFactory.getListOfCandidatesForOffice(office.officeTypeId)
      .then(function(data) {
        officePageData = data;
        office.pageData = officePageData;
        $log.info('OFFICE PAGE DATA! = ', officePageData);
        createCandidatesList(office.pageData.candidates);
      });
  }

  function createCandidatesList(candidatesArray) {
    angular.forEach(candidatesArray, function(candidate) {
      var candidateListItem = {};
      candidateListItem = createCandidateListItem(candidate);
      office.candidatesList.push(candidateListItem);
    });
  }

  function createCandidateListItem(candidateObject) {
    var item = {};
    item.linkTitle = candidateObject.name;
    item.subTitle = 'amount collected';
    item.avatarUrl = candidateObject.photo_url;
    item.dollarAmount = null;   //TODO: add in total dollar amounts for candidates

    //TODO: add in candidate state for toStateReference!
    //temporary state so ui-router doesn't throw an error:
    item.toStateReference = 'appMain.localePage.electionTypePage.officeElection';
    return item;
  }

}

OfficePageController.$inject = ['$log', '$state', 'officePageFactory'];
module.exports = OfficePageController;