/**
 * ng-browser-update - v1.1.0 - 2016-03-05
 * http://github.com/tinesoft/ng-browser-update
 *
 * Copyright (c) 2016 Tine Kondo
 * Licensed MIT
 */
(function ( window, angular, undefined ) {

angular.module('ngBrowserUpdate', [])
.directive('browserUpdate', ['$window', '$parse', function ($window,$parse) {

	var SCRIPT_URL = '//browser-update.org/update.js';

	function updateOptions($scope)
	{
		var $buoop = {};//the name '$buoop' is expected by Browser-Update.org's update.js script

		$buoop.vs 	= $scope.versions;
		$buoop.l = $scope.language;
		$buoop.reminder = $scope.reminder;
		$buoop.newwindow = $scope.newWindow;
		$buoop.test = $scope.alwaysShowBar;
		$buoop.text = $scope.notificationText;
		$buoop.onshow = $scope.onNotificationBarShown;
		$buoop.onclick = $scope.onNotificationBarClicked;

		$window.$buoop = $buoop; //the variable '$buoop' must be global
	}

	function createScript($element)
	{
        emptyElement($element);
        $element.append(angular.element('<script src="'+SCRIPT_URL+'"></script>'));
	}
	

	function emptyElement($element){
		while($element.firstChild){
  			$element.removeChild($element.firstChild);
		}
	}

	return {
		restrict: 'E',
		scope: {
			versions : '=',					// browser versions to notify
			language : '=',					// set a language for the message, e.g. "en", overrides the default detection
			reminder : '=',					// atfer how many hours should the message reappear: 0 = show all the time
			newWindow: '=',					// open link in new window/tab
			alwaysShowBar: '=',				// true = always show the bar (for testing)
			notificationText : '@',			// custom notification html text (takes precedence over the 'language' option)
			onNotificationBarShown: '&',	// callback function after the bar has appeared
			onNotificationBarClicked: '&'	// callback function if bar was clicked
		},
		link: function ($scope, $element, $attributes) {

			updateOptions($scope);
			createScript($element);

			$scope.$watch('[versions,language,reminder,newWindow,alwaysShowBar,notificationText,onNotificationBarShown,onNotificationBarClicked]', function(oldValue, newValue){
				if(oldValue != newValue){
					updateOptions($scope);
				}
			},true);
		}
	};
}]);

})( window, window.angular );
