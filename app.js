//instatiate the app and directives
var askExperts = angular.module('askExperts', ['ui.router']);

//create the routes
    askExperts.config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('home', {
                url: "",
                templateUrl: "partials/home.html",
                controller: 'QuestionCtrl'
            })
            .state('askQuestion', {
                url: "/askQuestion",
                templateUrl: "partials/askQuestion.html",
                controller: 'QuestionCtrl'
            });
});
