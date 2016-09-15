app.controller('portfolioCtrl', ['$scope', '$http', 'config', function ($scope, $http,config) {
  $http.get('https://www.trentsdevsite.com/wp-json/wp/v2/pages/')
        .success(function (data) {
            $scope.data = data;
        });

}]);
