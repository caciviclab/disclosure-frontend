'use strict';

var angular = require('angular');
require('angular-scroll-animate');

angular.module('odca.money', [
  'angular-scroll-animate'
])
  .directive('odcaMoneyByRegion', function () {
    return {
      restrict: 'E',
      template: require('./money_by_region.html'),
      controller: MoneyByRegionController,
      controllerAs: '$ctrl',
      bindToController: true,
      scope: {
        color: '@',
        money: '='
      }
    };
  })
  .filter('dollar', function ($filter) {
    // Shortcut for whole-dollar formatting
    return function (money) {
      return $filter('currency')(money || 0, '$', 0);
    };
  })
  .directive('odcaMoneyBarChart', function ($timeout, $window) {
    return {
      template: require('./money_bar_chart.html'),
      controller: MoneyBarChartController,
      link: link,
      bindToController: true,
      controllerAs: '$ctrl',
      scope: {
        color: '@', // One of green, red, blue
        format: '@', // How to format the value, money or percentage
        max: '@', // The maximum value (what counts as 100%) and is used to scale the measure
        precision: '@', // How many decimal places to format percentages
        value: '@' // The value to visualize
      }
    };

    function link (scope, element, attrs, ctrl) {
      scope.$watch('$ctrl.value', function (value) {
        updateMeasure(value);
      });

      var $$window = angular.element($window);
      $$window.on('resize orientationchange', onResize);
      scope.$on('$destroy', function () {
        $$window.off('resize orientationchange', onResize);
      });

      function onResize () {
        updateMeasure(ctrl.value);
      }

      function updateMeasure (value) {
        if (value === '') {
          return;
        }

        value = parseInt(value) || 0;

        var dom_element = element[0];
        var available_width  = dom_element.clientWidth * 2 / 3;
        var measure_width = Math.min(value / ctrl.max * available_width , available_width);

        var measure_element = dom_element.getElementsByClassName('money-bar-chart__measure')[0];
        angular.element(measure_element).css({width: '' + measure_width + 'px'});
      }
    }
  });

function MoneyBarChartController ($filter) {
  var ctrl = this;
  ctrl.$onInit = init;
  ctrl.displayValue = displayValue;

  function init () {
    // Set defaults
    ctrl.color = ctrl.color || 'blue';
    ctrl.max = ctrl.max || 100;
  }

  function displayValue() {
    return format(ctrl.format, ctrl.value, ctrl.max, parseInt(ctrl.precision));
  }

  function format (format, value, max, precision) {
    precision = precision || 0;

    if (format === 'percentage') {
      return $filter('number')(value / max * 100, precision) + '%';
    } else if (format === 'money') {
      return $filter('dollar')(value);
    } else {
      return '' + value;
    }
  }
}

MoneyBarChartController.$inject = ['$filter'];


function MoneyByRegionController ($scope, percentageCalculator) {
  var ctrl = this;
  ctrl.onVisible = onVisible;
  ctrl.total = null;

  $scope.$watch('$ctrl.money', function (money) {
    if (!money || !money.length) {
      return;
    }

    // Map the money to key, values
    var money_by_region = {};
    var total = 0;
    angular.forEach(money, function(moneyDescriptor) {
      money_by_region[moneyDescriptor.locale] = moneyDescriptor.amount;
      total += moneyDescriptor.amount;
    });

    ctrl.total = total;
    ctrl.money_by_region_percentages = percentageCalculator(money_by_region, 1000);
  });

  function onVisible ($el) {
    $el.removeClass('is-off-screen');
  }
}

MoneyByRegionController.$inject = ['$scope', 'percentageCalculator'];


module.exports = 'odca.money';
