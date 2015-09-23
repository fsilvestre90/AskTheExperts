//instatiate the app and directives
var askExperts = angular.module('askExperts', ['ui.router']);

//create the routes
askExperts.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html",
        controller: 'QuestionsCtrl'
    });
askExperts.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('questions.answers', {
        url: "/:questionId",
        templateUrl: "partials/question.answers.html",
        controller:'QuestionsCtrl'
    });
});

});
