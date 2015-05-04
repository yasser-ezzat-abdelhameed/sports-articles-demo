angular.module("configs", ["ui.router"]).config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'includes/home.html',
        controller: "homeCtrl"
    }).state('articles', {
        url: '/articles',
        templateUrl: 'includes/articles.html',
        controller: 'articlesCtrl'
    }).state('articles-list', {
        url: "/articles/{name:(?:eg|epl)}",
        templateUrl: 'includes/articles-list.html',
        controller: 'articlesListCtrl',
        resolve: {
            articles: ["$http", function ($http) {
                    return $http.get('main.json').then(function (response) {
                        return response.data.articles;
                    });
            }]
        }
    }).state('article', {
        url: "/articles/{name:(?:eg|epl)}/:temp",
        templateUrl: 'includes/article.html',
        controller: 'articleCtrl',
        resolve: {
            articles: ["$http", function ($http) {
                    return $http.get('main.json').then(function (response) {
                        return response.data.articles;
                    });
            }]
        }
    });
}]);
