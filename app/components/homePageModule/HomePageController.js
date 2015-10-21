(function() {
  'use strict';
  // Controller naming conventions should start with an uppercase letter
  function HomePageController($scope, sfMayorService, sfMayorIds) {
    $scope.searchBarEnabled = false;
    $scope.testVar = 'We are up and running using a required module!';

    function filterData (data, prop, value){
      var filtered =  _.filter(data, function(n){
                return n[prop] == value;
          });
      return filtered;
    };

    function sumData (data, prop){
      var s = _.sum(data, function(n){
                return parseInt(n[prop]);
          });
      return s;
    };

    $scope.candidates = sfMayorIds;

    $scope.candidates.forEach(function(d){

    	d.cc_committee[0].details = sfMayorService.cands(d.cc_committee[0], 'schA')
    });

    $scope.$watch('candidates[0].cc_committee[0].details.schA.total', function(newV, oldV){
    	var s = sumData(newV, 'tran_amt1');
    	var indivs = sumData(filterData(newV, 'entity_cd', 'IND'), 'tran_amt1');
		var oth = filterData(newV, 'entity_cd', 'OTH');
		var com = filterData(newV, 'entity_cd', 'COM');

		$scope.candidates[0].cc_committee[0].details.schA.by_contributorType = [indivs, oth, com];
		$scope.candidates[0].cc_committee[0].details.schA.sum = s;
    });

    $scope.$watch('candidates[1].cc_committee[0].details.schA.total', function(newV, oldV){
    	var s = sumData(newV, 'tran_amt1');
    	var indivs = sumData(filterData(newV, 'entity_cd', 'IND'), 'tran_amt1');
		var oth = filterData(newV, 'entity_cd', 'OTH');
		var com = filterData(newV, 'entity_cd', 'COM');

		$scope.candidates[1].cc_committee[0].details.schA.by_contributorType = [indivs, oth, com];
		$scope.candidates[1].cc_committee[0].details.schA.sum = s;
    });

   $scope.$watch('candidates[2].cc_committee[0].details.schA.total', function(newV, oldV){
    	var s = sumData(newV, 'tran_amt1');
    	var indivs = sumData(filterData(newV, 'entity_cd', 'IND'), 'tran_amt1');
		var oth = filterData(newV, 'entity_cd', 'OTH');
		var com = filterData(newV, 'entity_cd', 'COM');

		$scope.candidates[2].cc_committee[0].details.schA.by_contributorType = [indivs, oth, com];
		$scope.candidates[2].cc_committee[0].details.schA.sum = s;
    });

    
    console.log($scope.candidates)

    
   

  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
  HomePageController.$inject = ['$scope', 'sfMayorService', 'sfMayorIds'];
  module.exports = HomePageController;
})();