app.controller('blogCtrl', ['$scope', '$http', 'config', function ($scope, $http,config) {
    $http.get('cdhttps://www.trentsdevsite.com/wp-json/wp/v2/posts')
        .success(function (data) {
            $scope.data = data;
        });

}]);
