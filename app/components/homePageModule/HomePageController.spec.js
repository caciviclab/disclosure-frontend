/*jshint expr: true*/

'use strict';

require('../../app');

describe('HomeController', function() {

    var ctrl, scope;

    beforeEach(angular.mock.module('campaignFinanceApp'));

    beforeEach(function() {

        angular.mock.inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('HomePageController', {
                $scope: scope
            });
        });

    });

    it('should exist', function() {
        expect(ctrl).to.not.be.undefined;
    });

});
