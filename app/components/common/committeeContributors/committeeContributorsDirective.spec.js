/*jshint expr: true*/

'use strict';

var $ = require('jquery');

describe('committeeContributorsDirective', function() {

  var scope, committeeContributorsEl;

  beforeEach(angular.mock.module('committeeContributors'));

  beforeEach(function() {
    //TODO factory.js
    var contributors = [
      {
        name: 'Sarah Gold',
        date: new Date('2016-01-01'),
        amount: 100
      },
      {
        name: 'Ben Gold',
        date: new Date('2016-01-01'),
        amount: 100
      },
      {
        name: 'Jim Gold',
        date: new Date('2016-01-01'),
        amount: 100
      }
    ];

    angular.mock.inject(function($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.contributors = contributors;

      committeeContributorsEl = angular.element('<committee-contributors contributors="contributors"></committee-contributors>');
      $compile(committeeContributorsEl)(scope);
      $rootScope.$digest();
    });
  });

  afterEach(function() {
    committeeContributorsEl.remove();
  });

  it('has three sections', function() {
    expect($(committeeContributorsEl).find('.divided-section')).to.have.length(3);
  });

  it('should have three x three contributors', function() {
    expect($(committeeContributorsEl).find('tr.contributor')).to.have.length(9);
  });
});
