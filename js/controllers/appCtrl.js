app.controller('appCtrl', ['$scope', '$mdSidenav','$location','$animate','$mdDialog','$rootScope',  function($scope,$mdSidenav, $location, $animate, $mdDialog,$rootScope){

  $scope.sideNavOpen = true;

  $scope.menuLevels = [
{ name: "/#/blog", label: 'Blog', icon:"home"},
{ name: "/#/resume", label: 'Resume', icon:"insert_drive_file" },
{ name: "/#/portfolio", label: 'Portfolio', icon:"assessment" },
{ name: "/#/designs", label: 'Design Resources', icon:"file_download" }
];

  $scope.toggleSidenav = function() {
    $scope.sideNavOpen = !$scope.sideNavOpen
  };



}]);

