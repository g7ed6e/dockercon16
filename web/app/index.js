import angular from 'angular';
import './font.css';
import './style.css';

var lab = angular.module('lab', []);

lab.controller('LabCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.post('/api/words/noun').then(function(response) {
        $scope.noun1 = {
            word: response.data,
            hostname: response.headers('X-WordsAspnet-Host')
        };
    });
    $http.post('/api/words/noun').then(function(response) {
        $scope.noun2 ={
            word: response.data,
            hostname: response.headers('X-WordsAspnet-Host')
        };
    });
    $http.post('/api/words/adjective').then(function(response) {
        $scope.adjective1 ={
            word: response.data,
            hostname: response.headers('X-WordsAspnet-Host')
        };
    });
    $http.post('/api/words/adjective').then(function(response) {
        $scope.adjective2 = {
            word: response.data,
            hostname: response.headers('X-WordsAspnet-Host')
        };
    });
    $http.post('/api/words/verb').then(function(response) {
        $scope.verb = {
            word: response.data,
            hostname: response.headers('X-WordsAspnet-Host')
        };
    });
}]);
