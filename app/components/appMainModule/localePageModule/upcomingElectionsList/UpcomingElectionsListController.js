(function() {
  'use strict';

  function UpcomingElectionsListController($log, $filter, upcomingElectionsListFactory) {
    var rawBallotData = {};
    var ballotList = {};
    ballotList.offices = [];
    ballotList.councilPositions = [];
    ballotList.measures = [];

    var ctrl = this;
    ctrl.councilTitle = ctrl.localeType + ' Council';

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
      ballotListItem.id = contestObject.id;
      ballotListItem.type = contestObject.contest_type.toLowerCase();
      ballotListItem.linkTitle = contestObject.name;
      ballotListItem.linkUrl = $filter('slugify')(contestObject.name);
      ballotListItem.linkData = {
        // electionYear: $filter('date')(angular.isString(rawBallotData.date), 'yyyy'),
        electionYear: rawBallotData.date,
        electionType: contestObject.contest_type.toLowerCase(),
        electionTitle: $filter('slugify')(contestObject.name)
      };
      ballotListItem.toState = 'appMain.localePage.electionTypePage';
      ballotListItem.electionDate = rawBallotData.date;
      return ballotListItem;
    }

    //sref = '/' + electionYear + '/' + electionType + '/' + electionTitle

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

  }

  UpcomingElectionsListController.$inject = ['$log', '$filter', 'upcomingElectionsListFactory'];
  module.exports = UpcomingElectionsListController;
})();
