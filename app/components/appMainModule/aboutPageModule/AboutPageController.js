'use strict';
// Controller naming conventions should start with an uppercase letter
function AboutPageController() {
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
AboutPageController.$inject = ['$scope'];
module.exports = AboutPageController;
