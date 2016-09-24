var app = angular.module('norms', ['ngMaterial', 'ngRoute', 'ngAnimate', 'ngMessages','duScroll']).value('duScrollOffset', 25);


app.config(function ($routeProvider, $locationProvider, $sceProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('yellow');

    $sceProvider.enabled(false);
    $routeProvider
        .when('/blog', {
            templateUrl: 'partials/construction.html',
            controller: 'blogCtrl',
            title: 'Blog'
        })
        .when('/resume', {
            templateUrl: 'partials/resume.html',
            controller: 'resumeCtrl',
            title: 'Resume'
        })
        .when('/portfolio', {
            templateUrl: 'partials/portfolio.html',
            controller: 'portfolioCtrl',
            title: 'Project Portfolio'
        })
        .when('/designs', {
            templateUrl: 'partials/design.html',
            controller: 'designCtrl',
            title: 'Design Downloads'
        })
        .when('/article/:id', {
            templateUrl: 'partials/article.html',
            controller: 'articleCtrl',
            title: 'Article'
        })
        .when('/project/:id', {
            templateUrl: 'partials/project.html',
            controller: 'projectCtrl',
            title: 'Project Description'
        })
        .otherwise({
            redirectTo: '/blog'
        });

    // $locationProvider.html5Mode(true);
});

app.run(["$rootScope", "$location", "$mdToast", function ($rootScope, $location, $mdToast) {
    // Sets the loading bar at the top of the page to its default state (off)
    $rootScope.loading = false;
    $rootScope.wpUrl = "http://backend.trentsalazar.com/wp-json/wp/v2/";
   $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);