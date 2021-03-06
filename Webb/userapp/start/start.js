﻿(function () {
    'use strict';

    angular
        .module('userApp.start', ['ngRoute'])
        .config([
            '$routeProvider', function ($routeProvider) {
                $routeProvider.when('/start', {
                    templateUrl: 'start/start.html',
                    controller: 'StartController',
                    controllerAs: 'vm'
                });
            }
        ]);

    angular
    .module('userApp.start')
    .controller('StartController', startController);

    startController.$inject = ['$window', '$location'];

    function startController($window, $location) {
        var vm = this;


        vm.search = function() {
            $location.path('/search');
        }
    }
})();