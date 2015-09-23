askExperts.factory('QuestionsFactory', function() {
    var factory = {};
    factory.questions = [];
    factory.addQuestion = function() {
        factory.questions.push({
            id: factory.courses.length + 1,
            question: factory.question,
            isAnswered: false,
            answers: []
        });
        factory.question = null;
    };
    return factory;
});
