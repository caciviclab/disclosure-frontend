(function() {
  'use strict';
  // Controller naming conventions should start with an uppercase letter
  function ExamplePage1Controller($scope, $log, TestFactory1, examplePage1Factory) {
    $scope.exampleContents1 = 'We are up and running using a required module!';
    $scope.paragraphText = ' Example Page 1 explicitly references required files';
    var committeeExample = {};

    function getCommitteeExampleForPage(committeeId, urlPaths) {
      return examplePage1Factory.getExampleCommittee(committeeId, urlPaths)
        .then(function(data) {
          committeeExample = data;
          $log.info('COMMITTEE EXAMPLE = ', committeeExample);
          return committeeExample;
        });
    }
    getCommitteeExampleForPage('1', '');
  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
  ExamplePage1Controller.$inject = ['$scope', '$log', 'TestFactory1', 'examplePage1Factory'];
  module.exports = ExamplePage1Controller;
})();
