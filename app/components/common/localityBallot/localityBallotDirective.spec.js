/*jshint expr: true*/

'use strict';

var $ = require('jquery');

describe('localityBallotDirective', function() {

  var scope, localityBallotEl;

  beforeEach(angular.mock.module('localityBallot'));

  beforeEach(function() {
    //TODO factory.js
    var ballot = {
      ballot_id: 7,
      ballot_items: [
        {
          name: 'Mayor',
          type: 'office'
        },
        {
          name: 'Vice Mayor',
          type: 'office'
        },
        {
          name: 'Measure A',
          type: 'referendum'
        },
        {
          name: 'Measure B',
          type: 'referendum'
        },
        {
          name: 'Measure C',
          type: 'referendum'
        }
      ]
    };

    angular.mock.inject(function($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.ballot = ballot;

      localityBallotEl = angular.element('<locality-ballot ballot="ballot"></locality-ballot>');
      $compile(localityBallotEl)(scope);
      $rootScope.$digest();
    });
  });

  afterEach(function() {
    localityBallotEl.remove();
  });

  it('has two offices', function() {
    expect($(localityBallotEl).find('.locality-ballot_contest.office')).to.have.length(2);
  });

  it('has three referendums', function() {
    expect($(localityBallotEl).find('.locality-ballot_contest.referendum')).to.have.length(3);
  });
});
