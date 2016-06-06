(function() {
  'use strict';
  // Controller naming conventions should start with an uppercase letter
  function ExamplePage1Controller($scope, $log, TestFactory1, examplePage1Factory, $state) {
    //var alameda = TestFactory1.getAlameda();
    var alamedaData = TestFactory1.getAlamedaData();
    var dataResults = alamedaData.results;
    var pageData = {};
    var committee = {};
    var committeeExample = {};
    var electionCandidates = {};

    var rowData = [
      {name: 'Samantha Brooks', amount: 350, date: '2015-04-12'},
      {name: 'Lisa Sheppards', amount: 320, date: '2015-01-31'},
      {name: 'Raul Esposito', amount: 720, date: '2015-04-04'}
    ];
    
    var example = this;

    example.gridOptions5 = {};
    example.gridOptions5.data = rowData;
    example.contributionTotals = '51000';

    // var committeesData = [];
    //var self = this;
    example.pageTitle = $state.current.ncyBreadcrumbLabel;
    $log.info('STATE', $state.current);

    example.dataResults = dataResults;
    $log.info('example.dataResults =', example.dataResults);

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
        example.pageData = pageData;
        return pageData;
      });
    }

    function getAllContributorsForCommittee(committeeId, urlPaths) {
      return TestFactory1.getCommitteeContributors(committeeId, urlPaths).then(function(data) {
        committee.contributors = data;
        $log.info('COMMITTEE CONTRIBUTORS = ', committee.contributors);
        // $scope.gridOptions1.data = [];
        // angular.forEach(data, function(contributor) {
        //   $scope.gridOptions1.data.push(contributor);
        // });
        // $scope.committee.push(committee.contributors);
        // $scope.committee = committee.contributors;

        // $scope.gridOptions1.data = data;
        // return $scope.gridOptions1;

        // return committee.contributors;
      });
    }
    getAllContributorsForCommittee('1', '/contributors');

    function getCommittee(committeeId, urlPaths) {
      return TestFactory1.getCommittee(committeeId, urlPaths).then(function(data) {
        committee = data;
        $log.info('COMMITTEE = ', committee);
        // $scope.committee = committee;
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

    // function getTestOne() {
    //   TestFactory1.testOne();
    // }
  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
  ExamplePage1Controller.$inject = ['$scope', '$log', 'TestFactory1', 'examplePage1Factory', '$state'];
  module.exports = ExamplePage1Controller;
})();
