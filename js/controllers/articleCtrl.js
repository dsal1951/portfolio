app.controller('articleCtrl', ['$scope','$http','$routeParams','config',
    function($scope,$http,$routeParams,config) {

    $scope.articleId = $routeParams.id;
    $scope.baseUrl = config.getData('wpUrl');




    $http.get($scope.baseUrl+'/posts/'+$scope.articleId, {timeout: 20000})
        .success(function(data) {
            $scope.loading = false;
            $scope.data = data;
        })

 $http.get($scope.baseUrl+'/tags?post='+$scope.articleId, {timeout: 20000})
        .success(function(data) {
            $scope.tags = data;
        })

}]);
