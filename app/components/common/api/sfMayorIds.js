(function() {
  'use strict';
 
  function sfMayorIds() {

    var canList = [
        { 'f_name': 'Ed', 
          'l_name': 'Lee', 
          'cc_committee': [
            {
              'filer_name': 'Ed Lee for Mayor 2015', 
              'filer_id': 1373497
            }
          ], 

          'ie_committee':{
            'support':  [
              {
                'filer_name': 'Alice B. Toklas Lesbian and Gay Democratic Club PAC', 
                'filer_id': 842018
              }
            ],
          'oppose': [
              {
                'filer_name': '', 
                'filer_id': 0
              }
            ]   
          }
        }, 
        { 'f_name': 'Amy Farah', 
          'l_name': 'Weiss', 
          'cc_committee': [
            {
              'filer_name': '(YIMBY) WEISS for Mayor 2015', 
              'filer_id': 1374629
            }

          ]
        },
        {'f_name': 'Stuart', 
          'l_name': 'Schuffman', 
          'cc_committee': [
            {
              'filer_name': 'Stuart Schuffman for Mayor 2015', 
              'filer_id': 1377997
            }

          ]
        } 
      ];


    

    return canList;

  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
 sfMayorIds.$inject = [];
  module.exports = sfMayorIds;
})();