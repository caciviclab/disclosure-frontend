(function() {
  'use strict';

  function UpcomingElectionsListController($log, $stateParams, $filter, upcomingElectionsListFactory) {
    var rawBallotData = {};
    var ballotList = {};
    var selectedItem = upcomingElectionsListFactory.getSelectedItemData();

    ballotList.offices = [];
    ballotList.councilPositions = [];
    ballotList.measures = [];

    var ctrl = this;
    ctrl.councilTitle = $stateParams.localeType + ' Council';

    activate();
    function activate() {
      return upcomingElectionsListFactory.getUpcomingElectionData(ctrl.localeId)
        .then(function(data){
          rawBallotData = data;
          $log.info('RAW BALLOT DATA = ', rawBallotData);
          splitOfficesAndMeasures(rawBallotData.ballot_items);
          $log.info('BALLOT LIST = ', ballotList);
          ctrl.ballotList = ballotList;
        });
    }

    function splitOfficesAndMeasures(arrayOfBallotData) {
      angular.forEach(arrayOfBallotData, function(contest) {
        var item = {};
        item = createBallotListItem(contest);

        if (contest.contest_type.toLowerCase() == 'office') {
          splitCouncilPositionsAndOffices(item);
        } else {
          ballotList.measures.push(item);
        }
      });
    }

    function createBallotListItem(contestObject) {
      var ballotListItem = {};
      ballotListItem.type = contestObject.contest_type.toLowerCase();
      ballotListItem.linkTitle = contestObject.name;
      ballotListItem.linkData = {
        // electionYear: $filter('date')(rawBallotData.date, 'yyyy'),
        electionYear: $filter('limitTo')(rawBallotData.date, 4, 0),
        electionType: contestObject.contest_type.toLowerCase(),
        electionTypeId: contestObject.id,
        electionTitle: $filter('slugify')(contestObject.name)
      };
      ballotListItem.toState = defineStateForBallotItem(ballotListItem.linkData);
      ballotListItem.electionDate = rawBallotData.date;
      ballotListItem.onItemSelected = function(itemData) {
        $log.info('ON ITEM SELECTED = ', itemData);
        upcomingElectionsListFactory.storeSelectedItemData(itemData);
      };
      return ballotListItem;
    }

    function splitCouncilPositionsAndOffices(position) {
      var isCouncilPosition;
      isCouncilPosition = $filter('test')(position.linkTitle, 'Council'); //uses 'angular-filter'
      // $log.info('IS COUNCIL POSITION = ', isCouncilPosition);
      if(isCouncilPosition) {
        ballotList.councilPositions.push(position);
      } else {
        ballotList.offices.push(position);
      }
    }

    function defineStateForBallotItem(linkDataObject) {
      var state;
      state = 'appMain.localePage.electionTypePage({electionYear: ' + linkDataObject.electionYear + ', electionType: "' + linkDataObject.electionType + '", electionTypeId: "' + linkDataObject.electionTypeId + '", electionTitle: "' + linkDataObject.electionTitle + '"})';
      return state;
    }

  }

  UpcomingElectionsListController.$inject = ['$log', '$stateParams', '$filter', 'upcomingElectionsListFactory'];
  module.exports = UpcomingElectionsListController;
})();
