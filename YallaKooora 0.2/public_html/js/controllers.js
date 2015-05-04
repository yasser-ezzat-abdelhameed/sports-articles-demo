angular.module("controllers", []).controller("homeCtrl", ["$scope", function ($scope) {
        $scope.title = "Home";
    }]).controller("articlesCtrl", ["$scope", function ($scope) {
        $scope.title = "Articles";
    }]).controller("articlesListCtrl", ["$scope", "articles", function ($scope, articles) {
        var currentPage = location.hash.replace('#/articles/', '');
//        if (currentPage !== "eg" && currentPage !== "epl") {
//            location.hash = "#/";
//        }
        $scope.title = currentPage;
        $scope.articles = [];
        for (var i=0; i<articles.length; i++) {
            if(articles[i].type === currentPage)
                $scope.articles.push(articles[i]);
        }
        
    }]).controller("articleCtrl", ["$scope", "articles", function ($scope, articles) {
        var currentPage = location.hash.replace('#/articles/', '');
        var temp = currentPage.split("/");
        $scope.article = {};
        $scope.articles = [];
//        if (temp[0] !== "eg" && temp[0] !== "epl") {
//            location.hash = "#/";
//        }
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].name === temp[1]) {
                $scope.article = articles[i];
                break;
            }
        }
        if ($scope.article.name === undefined) {
            location.hash = "#/";
        }
        for (var i = 0; i < articles.length; i++) {
            if ($scope.article.type === articles[i].type) {
                var tempObj = articles[i];
                var tempDate = tempObj.date.split("/");
                tempDate = new Date(parseInt(tempDate[2]), parseInt(tempDate[1]) - 1, parseInt(tempDate[0]));
                tempObj.date = tempDate;
                $scope.articles.push(tempObj);
            }
        }
    }]);