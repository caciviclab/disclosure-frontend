/*jshint expr: true*/

'use strict';

describe('measurePageController', function() {

  var ctrl, scope, measure;

  beforeEach(angular.mock.module('measurePageModule'));

  beforeEach(function() {
    //TODO factory.js
    measure = {
      name: 'BB',
      city: {
        name: 'San Diego'
      }
    };

    angular.mock.inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('measurePageController', {
        $scope: scope,
        measure: measure
      });
    });

  });

  it('should exist', function() {
    expect(ctrl).to.be.ok;
  });

  it('passes measure to scope', function() {
    expect(scope).to.have.property('measure', measure);
  });

  it('passes city to scope', function() {
    expect(scope).to.have.property('city', measure.city);
  });
});
