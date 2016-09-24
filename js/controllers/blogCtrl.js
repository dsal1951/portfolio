app.controller('blogCtrl', ['$scope', '$http', 'config', function ($scope, $http,config) {
    $http.get('http://backend.trentsalazar.com/wp-json/wp/v2/posts')
        .success(function (data) {
            $scope.data = data;
        });

}]);
