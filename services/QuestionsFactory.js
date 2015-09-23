askExperts.factory('QuestionsFactory', function() {
    var factory = {};
    factory.questions = [];
    factory.addQuestion = function() {
        factory.questions.push({
            id: factory.questions.length + 1,
            questionTitle: factory.questionTitle,
            questionDescription: factory.questionDescription,
            userName: factory.userName,
            isAnswered: factory.isAnswered,
            answers: []
        });
        factory.questionDescription = null;
        factory.questionTitle = null;
        factory.userName = null;
    };
    return factory;
});
