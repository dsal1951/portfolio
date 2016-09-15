app.directive("flexContent", function() {
	return{
		restrict: 'E',
		templateUrl:'partials/flexContent.html',
		transclude: true
	}
  });