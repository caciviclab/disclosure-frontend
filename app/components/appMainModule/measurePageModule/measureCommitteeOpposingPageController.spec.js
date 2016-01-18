/*jshint expr: true*/

'use strict';

describe('measureCommitteeOpposingPageController', function() {

  var ctrl, scope, measure, opposers;

  beforeEach(angular.mock.module('measurePageModule'));

  beforeEach(function() {
    //TODO factory.js
    measure = {
      name: 'BB',
      city: {
        name: 'San Diego'
      }
    };

    opposers = [
      {
        committee_id: 1,
        name: 'Amerincan Committee',
        contributions: 10
      }
    ];

    angular.mock.inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('measureCommitteeOpposingPageController', {
        $scope: scope,
        measure: measure,
        opposers: opposers
      });
    });

  });

  it('should exist', function() {
    expect(ctrl).to.be.ok;
  });

  it('passes opposers to scope', function() {
    expect(scope).to.have.property('opposers', opposers);
  });
});
