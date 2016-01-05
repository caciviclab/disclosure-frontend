/**
 * localityMoneyDirective.js
 *
 * Describe the high-level overview of money within this locality.
 **/

'use strict';

function localityMoneyDirective() {
  return {
    restrict: 'E',
    scope: {
      locality: '='
    },
    template: require('./localityMoney.html')
  };
}

module.exports = localityMoneyDirective;
