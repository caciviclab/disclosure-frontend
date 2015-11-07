require('./index');

describe('disclosureApi', function() {
  var api;

  beforeEach(angular.mock.module('disclosure'));
  beforeEach(function() {
    var disclosureApi;
    angular.mock.inject(function(_disclosureApi_) {
      disclosureApi = _disclosureApi_;
      disclosureApi.then(function(_api_) {
        api = _api_;
      });
    });

    return disclosureApi;
  });

  it('exists', function() {
    expect(api).to.be.ok;
  });

  it('has contributions', function() {
    expect(api).to.have.property('contributions');
  });

  it('has elections', function() {
    expect(api).to.have.property('elections');
  });

  it('lists 10 contributions', function() {
    return api.contributions.list()
      .then(function(resp) {
        expect(resp.data).to.have.length(10);
      });
  });
});
