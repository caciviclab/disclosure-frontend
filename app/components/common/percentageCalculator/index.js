'use strict';

angular.module('odca.percentageCalculator', [])
  .factory('percentageCalculator', function() {
    return percentageCalculator;

    // http://stackoverflow.com/a/13483710
    // Calculate the percentages based on the Largest Remainder Method for the
    // the collection of key, value pairs, making sure the sum adds to 100% (or
    // target).
    function percentageCalculator(moneyCollection, target) {
      if (!moneyCollection) {
        return {};
      }

      target = target || 100;
      var percentages = {};

      var total = 0;
      angular.forEach(moneyCollection, function(value) {
        total += value;
      });

      // Start with the integer parts
      var totalPercentage = 0;
      angular.forEach(moneyCollection, function(value, key) {
        percentages[key] = Math.floor(value / total * target);
        totalPercentage += percentages[key];
      });

      var remainingPercentage = target - totalPercentage;
      if (!remainingPercentage) {
        return percentages;
      }

      // Sort keys by largest decimal part
      var sortedKeys = Object.keys(moneyCollection);
      sortedKeys.sort(function(a, b) {
        return (moneyCollection[b] / total * target % 1) - (moneyCollection[a] / total * target % 1);
      });

      // Distribute the remaining percentage
      while (remainingPercentage) {
        var key = sortedKeys.shift();
        percentages[key]++;
        remainingPercentage--;
      }

      return percentages;
    }
  });


module.exports = 'odca.percentageCalculator';
