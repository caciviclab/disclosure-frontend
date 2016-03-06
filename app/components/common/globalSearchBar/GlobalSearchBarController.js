'use strict';

// Controller naming conventions should start with an uppercase letter
function GlobalSearchBarController($http) {
  var vm = this;

  vm.person = {};
  vm.people = [
    { name: 'Adam',      email: 'adam@email.com',      age: 10 },
    { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
    { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
    { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
    { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
    { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
    { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
    { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
  ];

  vm.address = {};
  vm.refreshAddresses = function(address) {
    var params = {address: address, sensor: false};
    return $http.get(
      'http://maps.googleapis.com/maps/api/geocode/json',
      {params: params}
    ).then(function(response) {
      vm.addresses = response.data.results;
    });
  };

}

GlobalSearchBarController.$inject = ['$http'];
module.exports = GlobalSearchBarController;
