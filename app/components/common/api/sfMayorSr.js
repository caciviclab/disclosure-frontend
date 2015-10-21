(function() {
  'use strict';
 
  function sfMayorSr($http) {

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

    function getData(city, cmt, formSection, counter){
      //var cdata =[];
      //var counter = counter ? counter : 0;
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

                 console.log('counter: '+ counter)
                getData(city, cmt, formSection, counter);
            }
        }, 
          function errorCallback(response) {
          console.log(response);
        });
    };


    this.cands= function (ob, formSection){
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

        getData(sfbase, cmt, formSection, 0);

      return cmt;
    }

  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
 sfMayorSr.$inject = ['$http'];
  module.exports = sfMayorSr;
})();