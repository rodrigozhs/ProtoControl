(function(){

	function ctNavbar(){
		return {
			restrict: 'AE',
			templateUrl: 'app/shared/navbar/navbarView.html'
		}
	};

	angular.module('ctNavbar', []).directive('ctNavbar', ctNavbar);

})();