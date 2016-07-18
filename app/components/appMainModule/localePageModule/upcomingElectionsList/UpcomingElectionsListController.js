(function() {
  'use strict';

  function UpcomingElectionsListController($log, upcomingElectionsListFactory) {
    var rawBallotData = {};
    var ballotList = {};
    ballotList.offices = [];
    ballotList.measures = [];
    // ballotList.generalOffices = [];
    // ballotList.counsels = [];
    // ballotList.ballotMeasures = [];

    var ctrl = this;

    activate();
    function activate() {
      return upcomingElectionsListFactory.getUpcomingElectionData(ctrl.localeId)
        .then(function(data){
          rawBallotData = data;
          $log.info('upcomingElectionsList #1:RAW BALLOT DATA = ', rawBallotData);
          splitOfficesAndMeasures(rawBallotData.ballot_items);
          ctrl.ballotList = ballotList;
        });
    }

    function splitOfficesAndMeasures(arrayOfBallotData) {
      angular.forEach(arrayOfBallotData, function(contest) {
        var item = {};
        item = createBallotListItem(contest);

        if (contest.type == 'office') {
          ballotList.offices.push(item);
        } else {
          ballotList.measures.push(item);
        }
      });
      $log.info('SPLIT OFFICES AND MEASURES = ', ballotList);
    }

    function createBallotListItem(contestObject) {
      var ballotListItem = {};
      ballotListItem.id = contestObject.id;
      ballotListItem.type = contestObject.type;
      ballotListItem.linkTitle = contestObject.name;
      ballotListItem.linkUrl = contestObject.name;
      ballotListItem.electionDate = rawBallotData.date;
      return ballotListItem;
    }

  }

  UpcomingElectionsListController.$inject = ['$log', 'upcomingElectionsListFactory'];
  module.exports = UpcomingElectionsListController;
})();
