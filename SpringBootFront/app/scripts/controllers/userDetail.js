'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:UserDetailCtrl
 * @description
 * # UserDetailCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('UserDetailCtrl', ['$scope', '$routeParams', 'Users', '$location', function ($scope, $routeParams, Users, $location) {

    // var id = $routeParams.id;
    Users.get({id: $routeParams.id}).$promise.then(
      function(res){        
          $scope.user = res;
      },
      function(error){
          console.log(error);
      }
    );

    this.deleteUser = function(id) {

      if (!confirm("Eliminar?"))
        return false;

      Users.delete({id: $routeParams.id}).$promise.then(
        function(res){
          $location.path('/');
          Materialize.toast('Operación exitosa', 4000)
        },
        function(error){
            console.log(error);
        }
      );      

    }

    angular.element(document).ready(function () {
        $('.materialboxed').materialbox();
    });    

  }]);
