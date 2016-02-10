/*jshint expr: true*/

'use strict';

var $ = require('jquery');

describe('localityListingDirective', function() {

  var scope, localityListingEl;

  beforeEach(angular.mock.module('localityListing'));
  beforeEach(angular.mock.module(function($provide) {
    // Fake state
    $provide.value('$state', {current: {name: 'testState'}});
  }));

  beforeEach(function() {
    //TODO factory.js
    var locality = {
      id: 1,
      name: 'Bedrock',
      type: 'city'
    };

    var disclosureSummary = {
      location: {
        name: 'Bedrock',
        locality_id: 1234,
        next_election: '2016-11-03'
      },
      contribution_total: 4597,
      contribution_by_type: {
      },
      contribution_by_area: {
      }
    };

    angular.mock.inject(function($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.disclosureSummary = disclosureSummary;
      scope.locality = locality;

      localityListingEl = angular.element('<locality-listing locality="locality" disclosure-summary="disclosureSummary"></locality-listing>');
      $compile(localityListingEl)(scope);
      $rootScope.$digest();
    });
  });

  afterEach(function() {
    localityListingEl.remove();
  });

  it('has a locality name', function() {
    expect($(localityListingEl).find('.locality_listing-name')).to.have.text('Bedrock');
  });

  it('has upcoming election', function() {
    expect($(localityListingEl).find('.locality_listing-next_election')).to.have.text('Next Election: 2016-11-03');
  });

  it('scope has a selectedTab', function() {
    expect(localityListingEl.isolateScope()).to.have.property('selectedTab', 'testState');
  });
});
