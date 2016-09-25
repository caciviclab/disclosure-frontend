(function() {
  'use strict';

  function UpcomingElectionsListController($interpolate, $log, $stateParams, $filter, upcomingElectionsListFactory) {
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

          // Sort alphabetically
          ballotList.offices.sort(function(a, b) {
            // Council At-Large should be first
            if (/Council At-Large/.test(a.contest.name)) {
              return -1;
            }

            return a.contest.name.localeCompare(b.contest.name);
          });
          ballotList.councilPositions.sort(function(a, b) {
            return a.contest.name.localeCompare(b.contest.name);
          });
          ballotList.measures.sort(function(a, b) {
            return a.contest.number.localeCompare(b.contest.number);
          });
          $log.info('BALLOT LIST = ', ballotList);
          ctrl.ballotList = ballotList;
        });
    }

    function splitOfficesAndMeasures(arrayOfBallotData) {
      angular.forEach(arrayOfBallotData, function(contest) {
        var item = {};
        item = createBallotListItem(contest);

        if (contest.contest_type.toLowerCase() === 'office') {
          splitCouncilPositionsAndOffices(item);
        } else {
          ballotList.measures.push(item);
        }
      });
    }

    function createBallotListItem(contestObject) {
      var ballotListItem = {};
      ballotListItem.type = contestObject.contest_type.toLowerCase();
      ballotListItem.linkTitle = ballotListItem.type === 'referendum' ?
        //TODO move this to HTML so we can control what displays on different screen sizes
        $interpolate('{{ number }} {{ title }}')(contestObject) :
        contestObject.name;
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
      ballotListItem.contest = contestObject;
      return ballotListItem;
    }

    function splitCouncilPositionsAndOffices(position) {
      var isCouncilPosition;
      // Separate district-specific council contests
      isCouncilPosition = $filter('test')(position.linkTitle, 'Council District'); //uses 'angular-filter'
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

  UpcomingElectionsListController.$inject = ['$interpolate', '$log', '$stateParams', '$filter', 'upcomingElectionsListFactory'];
  module.exports = UpcomingElectionsListController;
})();
