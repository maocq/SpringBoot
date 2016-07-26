'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularAppApp.services'
  ])
  .config(['$routeProvider' ,function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/users/:id', {
        templateUrl: 'views/users/detail.html',
        controller: 'UserDetailCtrl',
        controllerAs: 'userDetail'
      })
      .when('/users-add', {
        templateUrl: 'views/users/add.html',
        controller: 'UserAddCtrl',
        controllerAs: 'userAdd'
      })
      .when('/users/:id/edit', {
        templateUrl: 'views/users/edit.html',
        controller: 'UserEditCtrl',
        controllerAs: 'userEdit'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .constant('constants', {
      urlPosts: 'http://localhost:8080/users'
  });
