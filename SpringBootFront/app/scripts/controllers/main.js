'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', ['$scope', 'Users', function ($scope, Users) {

    $scope.preload = true
    Users.query().$promise.then(
      function(res){
          console.log("Recursos");
          $scope.users = res;
          $scope.preload = false;
      },
      function(error){
          console.log(error);
          $scope.preload = false;
      }
    );

  }]);
