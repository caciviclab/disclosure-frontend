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
      contests: [
        {
          name: 'Mayor',
          contest_type: 'office'
        },
        {
          name: 'Vice Mayor',
          contest_type: 'office'
        },
        {
          name: 'Measure A',
          contest_type: 'referendum'
        },
        {
          name: 'Measure B',
          contest_type: 'referendum'
        },
        {
          name: 'Measure C',
          contest_type: 'referendum'
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
