(function() {
  'use strict';
  // Controller naming conventions should start with an uppercase letter
  function ExamplePage1Controller($scope, $log, TestFactory1, examplePage1Factory) {
    $scope.exampleContents1 = 'We are up and running using a required module!';
    $scope.paragraphText = ' Example Page 1 explicitly references required files';
    //var alameda = TestFactory1.getAlameda();
    var alamedaData = TestFactory1.getAlamedaData();
    var dataResults = alamedaData.results;
    var pageData = {};
    var committee = {};
    var committeeExample = {};
    var electionCandidates = {};
    //var self = this;

    $scope.dataResults = dataResults;
    $log.info('scope.dataResults =', $scope.dataResults);

    activate();

    function activate() {
      //getTestOne();
      // TestFactory1.testOne();
      // TestFactory1.getAlameda();
      //TestFactory1.testAlameda();
      // return alamedaInfo().then(function() {
      //   $log.log('it worked!');
      // });
      return TestFactory1.getPageData().then(function(data) {
        pageData = data;
        $log.info('page data = ', pageData);
        return pageData;
      });
    }

    function getAllContributorsForCommittee(committeeId, urlPaths) {
      return TestFactory1.getCommitteeContributors(committeeId, urlPaths).then(function(data) {
        committee.contributors = data;
        $log.info('COMMITTEE CONTRIBUTORS = ', committee.contributors);
        return committee.contributors;
      });
    }
    getAllContributorsForCommittee('1', '/contributors');

    function getCommittee(committeeId, urlPaths) {
      return TestFactory1.getCommittee(committeeId, urlPaths).then(function(data) {
        committee = data;
        $log.info('COMMITTEE = ', committee);
        return committee;
      });
    }
    getCommittee('1', '');

    function getCommitteeExampleForPage(committeeId, urlPaths) {
      return examplePage1Factory.getExampleCommittee(committeeId, urlPaths)
        .then(function(data) {
          committeeExample = data;
          $log.info('COMMITTEE EXAMPLE = ', committeeExample);
          return committeeExample;
        });
    }
    getCommitteeExampleForPage('1', '');

    function getCandidatesInElection(officeElectionId) {
      return TestFactory1.getAllCandidatesRunningInOfficeElection(officeElectionId)
        .then(function(data) {
          electionCandidates = data;
          $log.info('ELECTION CANDIDATES = ', electionCandidates);
          return electionCandidates;
        });
    }
    getCandidatesInElection('1');

    // function alamedaInfo() {
    //   return TestFactory1.getAlameda().then(function(data) {
    //     dataResults = data.results;
    //     return dataResults;
    //   });
    // }

    //$log.info(alamedaData);

    $scope.pageData = alamedaData;

    // function getTestOne() {
    //   TestFactory1.testOne();
    // }
  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
  ExamplePage1Controller.$inject = ['$scope', '$log', 'TestFactory1', 'examplePage1Factory'];
  module.exports = ExamplePage1Controller;
})();
