/*jshint expr: true*/

'use strict';

describe('measureCommitteeSupportingPageController', function() {

  var ctrl, scope, measure, supporters;

  beforeEach(angular.mock.module('measurePageModule'));

  beforeEach(function() {
    //TODO factory.js
    measure = {
      name: 'BB',
      city: {
        name: 'San Diego'
      }
    };

    supporters = [
      {
        committee_id: 1,
        name: 'Amerincan Committee',
        contributions: 10
      }
    ];

    angular.mock.inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('measureCommitteeSupportingPageController', {
        $scope: scope,
        measure: measure,
        supporters: supporters
      });
    });

  });

  it('should exist', function() {
    expect(ctrl).to.be.ok;
  });

  it('passes supporters to scope', function() {
    expect(scope).to.have.property('supporters', supporters);
  });
});
