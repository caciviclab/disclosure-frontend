'use strict';

/**
 * @ngdoc controller
 * @name referendumPageModule:ReferendumPageController
 *
 * @description
 *
 *
 * @requires $scope
 * */

function ReferendumPageController($log, $state, $stateParams, referendumPageFactory) {
  var metaData = {};

  var referendum = this;
  referendum.state = $state;
  referendum.referendumTypeId = $state.params.electionTypeId;

  activate();
  function activate() {
    return referendumPageFactory.getReferendumMetaData(referendum.referendumTypeId)
      .then(function(data) {
        metaData = data;
        referendum.referendumTitle = metaData.title;
        $log.info('REFERENDUM META DATA! = ', metaData);
      });
  }

}

ReferendumPageController.$inject = ['$log', '$state', '$stateParams', 'referendumPageFactory'];
module.exports = ReferendumPageController;