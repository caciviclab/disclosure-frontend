/**
 * @ngdoc controller
 * @name electionTypePageModule:ElectionTypePageController
 *
 * @description
 *
 *
 * @requires $scope
 * */
(function() {
  'use strict';

  function ElectionTypePageController($log, $state, $stateParams, upcomingElectionsListFactory) {
    var selectedItem = upcomingElectionsListFactory.getSelectedItemData();

    var election = this;
    election.state = $state;
    election.electionType = $stateParams.electionType;
    election.electionTypeId = $stateParams.electionTypeId || selectedItem.id;
    election.electionTitle = $stateParams.electionTitle;

    election.electionData = selectedItem;

  }

  ElectionTypePageController.$inject = ['$log', '$state', '$stateParams', 'upcomingElectionsListFactory'];
  module.exports = ElectionTypePageController;
})();