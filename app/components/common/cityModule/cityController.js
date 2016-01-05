'use strict';

var _ = require('lodash');

function cityController($scope, $state, city) {
  var selectedTab = _.last($state.current.name.split('.'));
  $scope.city = city;

  // TODO ui-bootstrap tabs expect to control their own content, but we're
  // using them purely as a UI element. Not sure if it makes sense or to just
  // roll our own. See the extra `.tab-content` element in DOM.
  $scope.tabs = [
    {title: 'Total Money To-date', active: selectedTab === 'money', stateName: 'money'},
    {title: 'Upcoming Elections', active: selectedTab === 'elections', stateName: 'elections'}
  ];

  $scope.onSelect = function(stateName) {
    if (!stateName) {
      return;
    }

    $state.go('appMain.city.' + stateName, $state.params);
  };
}

module.exports = cityController;
