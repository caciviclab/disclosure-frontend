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

function ReferendumPageController($log, $state, $stateParams, referendumPageFactory, static_api) {
  var metaData = {};
  // var uiRouterParams = localeStateDataStore.getStateData();
  var referendumPageData = referendumPageFactory.getReferendumPageData();

  var referendum = this;
  referendum.state = $stateParams;
  referendum.referendumTypeId = $state.params.electionTypeId;

  //TODO move these to resolve
  referendum.supporting = static_api.referendum.supporting({referendum_id: referendum.referendumTypeId});
  referendum.opposing = static_api.referendum.opposing({referendum_id: referendum.referendumTypeId});

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

ReferendumPageController.$inject = ['$log', '$state', '$stateParams', 'referendumPageFactory', 'static_api'];
module.exports = ReferendumPageController;
