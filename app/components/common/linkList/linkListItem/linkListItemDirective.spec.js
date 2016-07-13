/*jshint expr: true*/

'use strict';

//THIS FILE IS NOT IN USE YET
//TODO: REMOVE THIS FILE FROM THE EXCLUDE LIST IN karma.conf.js AFTER REPLACING MOCHA WITH JASMINE (AND REMOVING JQUERY DEPENDENCY)

describe('Directive: linkListItem.linkListItemDirective', function () {
    var ele, scope;

    // beforeEach(module('linkListItem'));
    beforeEach(angular.mock.module('linkListItem'));
    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();

        //update to match directive your testing
        // ele = angular.element('<div linkListItemDirective></div>');
      ele = angular.element('<odca-link-list-item></odca-link-list-item>');

        $compile(ele)(scope);
        scope.$apply();
    }));

    /**
     * @description
     * Sample test case to check if HTML rendered by the directive is non empty
     * */
    it('should not render empty html', function () {
        scope.$apply(function () {
            /**
             * Set the scope properties here.
             * scope.desc = 'test hostname';
             * scope.status = 'valid';
             *
             */
        });
        expect(ele.html()).not.toBe('');
    });
});
