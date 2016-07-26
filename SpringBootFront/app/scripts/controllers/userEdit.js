'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:UserEditCtrl
 * @description
 * # UserEditCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('UserEditCtrl', ['$scope', '$routeParams', 'Users', '$location', function ($scope, $routeParams, Users, $location) {

    Users.get({id: $routeParams.id}).$promise.then(
      function(res){        
          $scope.user = res;
      },
      function(error){
          console.log(error);
      }
    );

    this.update = function() {

		Users.update({id: $scope.user.ide}, $scope.user).$promise.then(
          function(res){
              $location.path('/');
          	  Materialize.toast('Operación exitosa', 4000)
          },
          function(error){
              console.log(error);
          }
        );

  		console.log($scope.user);
    }

  }]);
