askExperts.controller('QuestionCtrl', function QuestionCtrl($scope, QuestionsFactory, UtilitiesFactory) {
    $scope.questions = QuestionsFactory.questions;
    $scope.QuestionsFactory = QuestionsFactory;
});
