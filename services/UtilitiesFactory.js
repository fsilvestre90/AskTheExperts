askExperts.factory('UtilitiesFactory', function() {
    return {
        findById: function(collection, questionId) {
            for (var i = 0; i < collection.length; i++) {
                if (collection[i].id == questionId) {
                    return collection[i];
                }
            }
            return null;
        }
    }
});