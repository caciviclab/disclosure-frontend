/*jshint expr: true*/
'use strict';

require('./appMainNav');

describe('appMainNavController', function() {

  var ctrl, scope;

  beforeEach(angular.mock.module('appMainNavModule'));
  beforeEach(angular.mock.module('ui.router', function($stateProvider) {
    // Create some test states
    $stateProvider.state('start', {});
    $stateProvider.state('end', {});
  }));

  beforeEach(function() {
    angular.mock.inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('appMainNavController', {
        $scope: scope
      });
    });
  });

  it('should exist', function() {
    expect(ctrl).to.not.be.undefined;
  });

  // it('has a main menu', function() {
  //   expect(scope).to.have.property('mainNavMenu');
  //   expect(scope.mainNavMenu).to.have.length.gt(0);
  // });

  it('has a demo menu', function() {
    expect(scope).to.have.property('demoNavMenu');
    expect(scope.demoNavMenu).to.have.length.gt(0);
  });

  describe('state change', function() {
    beforeEach(angular.mock.inject(function($state, $rootScope) {
      // Open nav
      scope.navCollapsed = false;

      $state.go('end');
      $rootScope.$digest();
    }));

    it('closes the nav', function() {
      expect(scope.navCollapsed).to.be.true;
    });
  });
});
