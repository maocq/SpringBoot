'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:UserAddCtrl
 * @description
 * # UserAddCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('UserAddCtrl', ['$scope', 'Users', '$location', function ($scope, Users, $location) {

  	$scope.user = {
  		ide: null,
  		name: "",
  		email: ""
  	}

    this.save = function() {

		Users.save($scope.user).$promise.then(
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
