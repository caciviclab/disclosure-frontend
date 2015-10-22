(function() {
  'use strict';
  // Controller naming conventions should start with an uppercase letter
  function FaqPageController($scope) {

    $scope.faqs = [
      { question: 'Is this a question', answer: 'Yup! And the answer goes here' }, //Example
      { question: 'What about this one', answer: 'That\'s a question too!' }  //Example
    ];

  }

  // $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
  FaqPageController.$inject = ['$scope'];
  module.exports = FaqPageController;
})();