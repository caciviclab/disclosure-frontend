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

function OfficePageController($filter, $interpolate, $log, $state, officePageFactory) {
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
    // Sort candidates by contribution total
    candidatesArray.sort(function(a, b) {
      return b.supporting_money.contributions_received - a.supporting_money.contributions_received;
    });

    angular.forEach(candidatesArray, function(candidate) {
      var candidateListItem = {};
      candidateListItem = createCandidateListItem(candidate);
      office.candidatesList.push(candidateListItem);
    });
  }

  function createCandidateListItem(candidateObject) {
    var item = {};
    item.linkTitle = candidateObject.name;
    item.subTitle = candidateObject.supporting_money.contributions_received ?
      $interpolate('Amount collected {{ money | dollar }}')({money: candidateObject.supporting_money.contributions_received}) :
      'No campaign finance data available';
    item.avatarUrl = $filter('candidate_photo')(candidateObject);
    item.dollarAmount = null;   //TODO: add in total dollar amounts for candidates

    item.toState = $interpolate('appMain.localePage.candidate({electionYear: "{{ electionYear }}", candidateId: "{{ candidateId }}" })')({
      electionYear: $state.params.electionYear,
      candidateId: candidateObject.id
    });
    return item;
  }

}

OfficePageController.$inject = ['$filter', '$interpolate', '$log', '$state', 'officePageFactory'];
module.exports = OfficePageController;
