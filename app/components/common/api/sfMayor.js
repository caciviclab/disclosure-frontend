(function() {
  'use strict';
 
  function sfMayor($http, sfMayorIds) {

    //console.log(sfMayorIds)

    var sfbase ={
      'base': 'https://data.sfgov.org/resource/',
      'schA': 'q66q-d2tr.json'
    };

    var cmt ={
          name: '', 
          id: 0,
          schA: {
            total: [], 
            by_contributorType :[]
          },
          schE: {
            total: []
          }
      };

    var entityCd = ['IND', 'OTH', 'COM', 'SCC', 'PTY'];


    var candidate = {
          name: '', 
          cc_committee: {},
          ie_supporters: [], 
          ie_opponents: []
      };

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

    function apiQueryConstructor(city, formSection, cmtId, counter){
      var q = city.base + city[formSection] + '?filer_id='+ cmtId;
      var offset = (counter)? '&$offset=' + counter : '';
      return q+offset;
    };

    function getData(city, cmt, formSection){
      //var cdata =[];
      var counter = counter ? counter : 0;
      var aUrl = apiQueryConstructor(city, formSection, cmt.id, counter);
      var serviceOb = $http({
            method: 'GET',
            url: aUrl
        });

      //console.log(aUrl)

        serviceOb
        .then(function successCallback(response) {
          cmt[formSection].total = cmt[formSection].total.concat(response.data);

          //console.log(cmt[formSection].total)
            if(response.data.length===1000){
                counter+=1000;
                getData(city, cmt, formSection, counter);
            }
        }, 
          function errorCallback(response) {
          console.log(response);
        });
    };


    function cands (ob){
        var cmt ={
            name: '', 
            id: 0,
            schA: {
              total: [], 
              by_contributorType :[]
            },
            schE: {
              total: []
            }
        };

        cmt.id = ob.filer_id;
        cmt.name = ob.filer_name;

        getData(sfbase, cmt, 'schA');

        console.log(cmt)

      return cmt;
    }



    var testOb = cands(sfMayorIds[0].cc_committee[0]);


    return testOb;

  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
  sfMayor.$inject = ['$http', 'sfMayorIds'];
  module.exports = sfMayor;
})();