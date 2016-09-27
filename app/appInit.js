'use strict';

function appInit($rootScope, $state) {
  $rootScope.$state = $state;

  // Proper Regex Pattern for email input form validation
  $rootScope.emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

appInit.$inject = ['$rootScope', '$state'];
module.exports = appInit;
