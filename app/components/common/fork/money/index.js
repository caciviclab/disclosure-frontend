'use strict';

var angular = require('angular');
require('angular-scroll-animate');

angular.module('money', [
  'angular-scroll-animate'
])
  .directive('moneyByRegion', {
    restrict: 'E',
    template: require('./money_by_region.html'),
    controller: MoneyByRegionController,
    controllerAs: '$ctrl',
    bindToController: {
      color: '@',
      money: '='
    }
  })
  .filter('dollar', function ($filter) {
    // Shortcut for whole-dollar formatting
    return function (money) {
      return $filter('currency')(money, '$', 0);
    };
  })
  .directive('moneyBar', function ($timeout, $window) {
    return {
      template: require('./money_bar.html'),
      controller: MoneyBarController,
      link: link,
      bindToController: true,
      controllerAs: '$ctrl',
      scope: {
        color: '@', // One of green, red, blue
        format: '@', // How to format the value, money or percentage
        max: '@', // The maximum value (what counts as 100%) and is used to scale the measure
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

        var available_width  = angular.element(element).width() * 2 / 3;
        var $measure = angular.element(element).find('.money-bar__measure');
        $measure.width(Math.min(value / ctrl.max * available_width , available_width));
      }
    }
  });

function MoneyBarController ($filter) {
  'ngInject';

  var ctrl = this;
  ctrl.$onInit = init;
  ctrl.displayValue = displayValue;

  function init () {
    // Set defaults
    ctrl.color = ctrl.color || 'blue';
    ctrl.max = ctrl.max || 100;
  }

  function displayValue() {
    return format(ctrl.format, ctrl.value);
  }

  function format (format, value) {
    if (format === 'percentage') {
      return $filter('number')(value / ctrl.max * 100, 0) + '%';
    } else if (format === 'money') {
      return $filter('dollar')(value);
    } else {
      return '' + value;
    }
  }
}

function MoneyByRegionController ($scope) {
  'ngInject';

  var ctrl = this;
  ctrl.onVisible = onVisible;
  ctrl.total = null;

  $scope.$watch('$ctrl.money', function (money) {
    if (!money) {
      return;
    }

    ctrl.total = money.within_oakland + money.within_california + money.out_of_state;
  });

  function onVisible ($el) {
    $el.removeClass('is-off-screen');
  }
}

module.exports = 'money';
