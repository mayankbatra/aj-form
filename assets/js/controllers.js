'use strict';

/* Controllers */
//var visible = false;

AsaanApp.controller('TestController',
    function($scope, $http, $location, $routeParams, Question, Answer) {

        $scope.$on('$routeChangeSuccess', function() {
            $scope.skill = $routeParams.skill;
            $scope.questions = Question.query({
                skill: $scope.skill
            }); //query() returns all the entries
        });

        $scope.submit = function() {
            Answer.insert($scope.questions);

        }
    }
);