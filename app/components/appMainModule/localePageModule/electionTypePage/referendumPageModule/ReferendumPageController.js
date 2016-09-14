'use strict';

/**
 * @ngdoc controller
 * @name referendumPageModule:ReferendumPageController
 *
 * @description
 *
 *
 * @requires $log, $state, referendumPageFactory
 * */

function ReferendumPageController($log, $state, $stateParams, referendumPageFactory) {
  var metaData = {};
  // var uiRouterParams = localeStateDataStore.getStateData();
  var referendumPageData = referendumPageFactory.getReferendumPageData();

  var referendum = this;
  referendum.state = $state;
  referendum.referendumTypeId = $state.params.electionTypeId;

  referendum.referendumData = referendumPageData;
  $log.info('REFERENDUM PAGE DATA = ', referendum.referendumData);

  activate();
  function activate() {
    return referendumPageFactory.getReferendumMetaData(referendum.referendumTypeId)
      .then(function(data) {
        metaData = data;
        referendum.metaData = metaData;
        // referendum.referendumTitle = metaData.title;
        $log.info('REFERENDUM META DATA! = ', metaData);
      });
  }

}

ReferendumPageController.$inject = ['$log', '$state', '$stateParams', 'referendumPageFactory'];
module.exports = ReferendumPageController;