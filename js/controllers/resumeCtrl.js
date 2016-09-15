app.controller('resumeCtrl', ['$scope', '$http', 'config', '$anchorScroll', '$location',

    function ($scope, $http, config, $anchorScroll, $location) {
        var container = angular.element(document.getElementById('container'));
        var section2 = angular.element(document.getElementById('section-2'));
        $scope.toTheTop = function () {
            container.scrollTop(0, 5000);
        };
        $scope.code = [
            {url: 'img/python.svg', name: 'Python'},
            {url: 'img/sklearn.svg', name: 'Scikit-learn'},
            {url: 'img/pandas.svg', name: 'Pandas'},
            {url: 'img/matplotlib.svg', name: 'Matplotlib'},
            {url: 'img/angular.svg', name: 'AngularJS'},
            {url: 'img/d3.svg', name: 'D3'}
        ];
        $scope.tools = [
            {url: 'img/ipython.svg', name: 'IPython Notebook (Jupyter)'},
            {url: 'img/redshift.svg', name: 'Amazon Redshift'},
            {url: 'img/s3.svg', name: 'Amazon S3'},
            {url: 'img/ec2.svg', name: 'Amazon EC2'},
            {url: 'img/couch.svg', name: 'CouchDB (NOSQL)'}
        ];

    }]);
