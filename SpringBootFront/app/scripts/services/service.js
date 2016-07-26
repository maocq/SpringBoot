'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.services:Service
 * @description
 * # Service
 * Service of the angularAppApp
 */

angular.module('angularAppApp.services', ['ngResource'])


.factory("Users", ['$resource', 'constants', function($resource, constants)
{
    return $resource(constants.urlPosts+"/:id", {id: "@id"}, {'update': { method:'PUT' }});
}]);