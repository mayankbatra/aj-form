'use strict';

//angular.module('AsaanApp', ['AsaanApp.controllers', 'AssanApp.directives']);
//Add angular modules
var AsaanApp = angular.module('AsaanApp', ['ngRoute','ngResource']);


var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
    return window._; // assumes underscore has already been loaded on the page
});


AsaanApp.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

    $routeProvider.when('/test/skill/:skill', {
        templateUrl: '/partials/showTest.html'
    });
});

//Client Side models for Questions
AsaanApp.factory('Question', function($resource) {
  return $resource('/questions/:id'); // Note the full endpoint address
});

//Client Side models for Answers 
AsaanApp.factory('Answer', function($resource) {
  return $resource('/answers/:id',{},{
  	insert: {method:'POST', url: '/answers/submit'}
  }); // Note the full endpoint address
});