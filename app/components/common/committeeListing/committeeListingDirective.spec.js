/*jshint expr: true*/

'use strict';

var $ = require('jquery');

xdescribe('committeeListingDirective', function() {

  var scope, committeeListingEl;

  beforeEach(angular.mock.module('committeeListing'));

  beforeEach(function() {
    //TODO factory.js
    var committee = {
      committee_id: 1234,
      name: 'Committee for America',
      contribution_by_type: {
        unitemized: 2916394,
        self_funded: 512554,
        political_party: 6426112,
        individual: 11134547,
        recipient_committee: 986229
      },
      contribution_by_area: {
        inside_location: 0.56,
        inside_state: 0.38,
        outside_state: 0.06
      }
    };

    angular.mock.inject(function($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.committee = committee;

      committeeListingEl = angular.element('<committee-listing committee="committee"></committee-listing>');
      $compile(committeeListingEl)(scope);
      $rootScope.$digest();
    });
  });

  afterEach(function() {
    committeeListingEl.remove();
  });

  it('has contributions by type', function() {
    expect($(committeeListingEl).find('[contribution-type-breakdown]')).to.have.length(1);
  });

  it('has contributions by area', function() {
    expect($(committeeListingEl).find('[contribution-area-breakdown]')).to.have.length(1);
  });
});
