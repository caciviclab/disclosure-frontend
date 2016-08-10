// /*jshint expr: true*/

// 'use strict';

// describe('measureCommitteeOpposingDirective', function() {

//   var scope, measureCommitteeListEl;

//   beforeEach(angular.mock.module('measureCommitteeList'));

//   beforeEach(function() {
//     //TODO factory.js
//     var committees = [
//       {
//         name: 'American Test Committee',
//         contributions: 10
//       },
//       {
//         name: 'American Test Commission',
//         contributions: 10
//       },
//       {
//         name: 'Committee for American Tests',
//         contributions: 10
//       }
//     ];

//     angular.mock.inject(function($compile, $rootScope) {
//       scope = $rootScope.$new();
//       scope.committees = committees;

//       measureCommitteeListEl = angular.element('<measure-committee-list committees="committees"></measure-committee-list>');
//       $compile(measureCommitteeListEl)(scope);
//       $rootScope.$digest();
//     });
//   });

//   afterEach(function() {
//     measureCommitteeListEl.remove();
//   });

//   it('should have two committees', function() {
//     expect(measureCommitteeListEl.find('li')).to.have.length(3);
//   });
// });
