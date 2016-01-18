/*jshint expr: true*/

'use strict';

var $ = require('jquery');

describe('localityMoneyDirective', function() {

  var scope, localityMoneyEl;

  beforeEach(angular.mock.module('localityMoney'));

  beforeEach(function() {
    //TODO factory.js
    var locality = {
      location: {
        name: 'Bedrock',
        locality_id: 1234
      },
      contribution_total: 4597,
      contribution_by_type: {
      },
      contribution_by_area: {
      }
    };

    angular.mock.inject(function($compile, $rootScope) {
      scope = $rootScope.$new();
      scope.locality = locality;

      localityMoneyEl = angular.element('<locality-money locality="locality"></locality-money>');
      $compile(localityMoneyEl)(scope);
      $rootScope.$digest();
    });
  });

  afterEach(function() {
    localityMoneyEl.remove();
  });

  it('has total contributions formatted as money', function() {
    expect($(localityMoneyEl).find('.locality-money_contribution-total').text()).to.equal('$4,597');
  });

  it('has contribution type breakdown', function() {
    expect($(localityMoneyEl).find('[contribution-type-breakdown]')).to.have.length(1);
  });

  it('has contribution area breakdown', function() {
    expect($(localityMoneyEl).find('[contribution-area-breakdown]')).to.have.length(1);
  });
});
