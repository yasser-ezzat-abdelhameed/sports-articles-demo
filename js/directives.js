angular.module("directives", []).directive("relatedArticles", function () {
    return {
        link: function (scope, element, attrs) {
            scope.countOfRelatedArticles = 5;
            if (element.children().length < 5) {
                scope.countOfRelatedArticles = 6;
            }
        }
    };
});