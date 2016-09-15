app.controller('projectCtrl', ['$scope','$http','$routeParams','config',
    function($scope,$http,$routeParams,config) {

    $scope.projectId = $routeParams.id;
    $scope.baseUrl = config.getData('wpUrl');




    $http.get('https://www.trentsdevsite.com/wp-json/wp/v2/pages/'+$scope.projectId, {timeout: 20000})
        .success(function(data) {
            $scope.loading = false;
            $scope.data = data;
        });

}]);
