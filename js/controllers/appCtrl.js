app.controller('appCtrl', ['$scope', '$mdSidenav','$location','$animate','$mdDialog','$rootScope',  function($scope,$mdSidenav, $location, $animate, $mdDialog,$rootScope){

  $scope.sideNavOpen = false;

  $scope.menuLevels = [
{ name: "/#/blog", label: 'Blog', icon:"home", disabled:false},
{ name: "/#/resume", label: 'Resume', icon:"insert_drive_file", disabled:false},
{ name: "/#/portfolio", label: 'Portfolio', icon:"assessment", disabled:false},
{ name: "/#/designs", label: 'Design Resources', icon:"file_download",disabled:true }
];

  $scope.toggleSidenav = function() {
    $mdSidenav('left').toggle();
  };
}]);

