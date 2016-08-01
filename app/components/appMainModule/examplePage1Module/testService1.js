//(function() {
  'use strict';

// module.exports = angular.module('testFactory1Module', [])
//     // .factory('TestFactory1', require('./ResourceName.js'));
//  module.exports = angular.module('testFactory1Module', [])
//      .factory('TestFactory1', TestFactory1);

// angular.module('module')
//   .factory('Service', Service);
  var TestFactory1 = function($http, $q, $log, CONSTANTS) {
    var apiBaseUrl = CONSTANTS.DISCLOSURE_API_BASEURL;
    //var apiBaseUrl = CONSTANTS.DISCLOSURE_API_HOSTPATH_WITH_PORT;
    var apiEndpoint = '/locality';

    var localePageData = {};
    var results;

    var service = {
      testOne: testOne,
      getAlameda: getAlameda,
      getAlamedaData: getAlamedaData,
      getPageData: getPageData,
      getPageDataComplete: getPageDataComplete,
      getPageDataFailed: getPageDataFailed,
      getListOfLocalities: getListOfLocalities,
      getCommittee: getCommittee,
      getCommitteeContributors: getCommitteeContributors,
      setCommitteeContributors: setCommitteeContributors,
      getAllCandidatesRunningInOfficeElection: getAllCandidatesRunningInOfficeElection
    };
    return service;

    function testOne() {
      console.log(apiBaseUrl);
      $log.debug(apiBaseUrl);
    }

    function getAlameda() {
      //var results = [];
      //return $http.get(apiBaseUrl + apiEndpoint + '/4')
      return $http.get('https://api.open.fec.gov/v1/schedules/schedule_a/?per_page=20&sort_nulls_large=true&api_key=DEMO_KEY')
        //.then()
        .success(function (data) {
          $log.info(data);
          results = data;
          return results;
          //localePageData = data;
        });
      //results = localePageData.results;
      //return localePageData;
    }

    function getPageData() {
      return $http.get(apiBaseUrl + apiEndpoint + '/4')
        //return $http.get('https://api.open.fec.gov/v1/schedules/schedule_a/?per_page=20&sort_nulls_large=true&api_key=DEMO_KEY')
        .then(getPageDataComplete)
        .catch(getPageDataFailed);

      function getPageDataComplete(data) {
        return data.data;
      }

      function getPageDataFailed(e) {
        var newMessage = 'XHR Failed for getCustomer';
        if (e.data && e.data.description) {
          newMessage = newMessage + '\n' + e.data.description;
        }
        e.data.description = newMessage;
        $log.error(newMessage);
        return $q.reject(e);
      }
    }

    function getAlamedaData() {
      return getPageData().then(function (data) {
        localePageData = data;
        $log.info('locale page data = ', localePageData);
        return localePageData;
      });
      // $log.info('results =', localePageData.results);
      // return localePageData.results;
    }

    function getPageDataComplete(data, status, headers, config) {
      return data.data;
    }

    function getPageDataFailed(e) {
      var newMessage = 'XHR Failed for getPageData';
      if (e.data && e.data.description) {
        newMessage = newMessage + '\n' + e.data.description;
      }
      e.data.description = newMessage;
      $log.error(newMessage);
      return $q.reject(e);
    }

    function getListOfLocalities() {
      return $http.get(apiBaseUrl + '/locality/search/')
        .then(getPageDataComplete)
        .catch(getPageDataFailed);
    }

    // function getLocaleBallotList(localeId, ballotId, urlPaths) {
    //   return $http.get(apiBaseUrl + '/committee/' + committeeId + urlPaths)
    //     .then(getPageDataComplete)
    //     .catch(getPageDataFailed);
    // }

    function getCommittee(committeeId, urlPaths) {
      return $http.get(apiBaseUrl + '/committee/' + committeeId + urlPaths)
        .then(getPageDataComplete)
        .catch(getPageDataFailed);
    }

    function getCommitteeContributors(committeeId, urlPaths) {
      return getCommittee(committeeId, urlPaths);
      // return $http.get(apiBaseUrl + '/committee/' + committeeId)
      //   .then(getPageDataComplete)
      //   .catch(getPageDataFailed);
    }

    function setCommitteeContributors() {
      return getCommitteeContributors().then(function(data) {
        localePageData.committeeContributors = data;
        $log.info('ALL LOCALE PAGE DATA = ', localePageData);
        $log.info('COMMITTEE CONTRIBUTORS = ', localePageData.committeeContributors);
        return localePageData.committeeContributors;
      });
    }

    function getAllCandidatesRunningInOfficeElection(officeElectionId) {
      return $http.get(apiBaseUrl + '/office_election/' + officeElectionId)
        .then(getPageDataComplete)
        .catch(getPageDataFailed);
    }
  };

  TestFactory1.$inject = ['$http', '$q', '$log', 'CONSTANTS'];
  module.exports = TestFactory1;

//})();




// function getCustomer(id) {
//     return $http.get('/api/customer/' + id)
//         .then(getCustomerComplete)
//         .catch(getCustomerFailed);
//
//     function getCustomerComplete(data, status, headers, config) {
//         return data.data;
//     }
//
//     function getCustomerFailed(e) {
//         var newMessage = 'XHR Failed for getCustomer'
//         if (e.data && e.data.description) {
//           newMessage = newMessage + '\n' + e.data.description;
//         }
//         e.data.description = newMessage;
//         logger.error(newMessage);
//         return $q.reject(e);
//     }
// }



// function TestFactory1($log, CONSTANTS) {
//   var basepath = CONSTANTS.DISCLOSURE_API_BASEPATH;
//
//   var service = {
//     testOne: testOne
//   };
//   return service;
//
//   function testOne() {
//     console.log(basepath);
//     $log.debug(basepath);
//   }
// }
