describe('Directive: browserUpdate', function () {

	var element, $scope, $compile, $window,	
		defaultTemplate = '<browser-update></browser-update>',
		attrOptionsTemplate = 
			'<browser-update always-show-bar="true" new-window="true" reminder="1"'+
			'			language="\'it\'" versions="{i:8,f:8,o:9.63,s:2,c:8}"'+
			'			notification-text="This is my custom notification message"'+					
			'</browser-update>',
		scopeOptionsTemplate = 
			'<browser-update always-show-bar="alwaysShowBar" new-window="newWindow" reminder="reminder"'+
			'			language="language" versions="versions"'+
			'			notification-text="{{notificationText}}"'+					
			'			on-notification-bar-shown="onNotificationBarShown(\'show\');"'+
			'			on-notification-bar-clicked="onNotificationBarClicked(\'click\');">'+
			'</browser-update>';

	 function createDirective(data, template) {
		//scope.data = data || defaultData;

		var elm = angular.element(template || defaultTemplate);
		angular.element(document.body).prepend(elm);
		$compile(elm)($scope);
		$scope.$digest();

		return elm;
	}

	 beforeEach(function () {

		module('ngBrowserUpdate');

		inject(function (_$rootScope_, _$compile_,_$window_) {
		  $scope = _$rootScope_.$new();
		  $compile = _$compile_;
		  $window  = _$window_;
		});
	});

	afterEach(function () {
		if (element) {
			element.remove();
		}
	});

	describe('when created without any options', function(){
		it('should contains an inner "script" element', function(){
			element = createDirective();
			expect(element).toBeDefined();

			children = element.children();
			expect(children.length).toEqual(1); // one inner child (the script element)
			expect(children[0].tagName).toEqual('SCRIPT');
			expect(children[0].src).toEqual('http://browser-update.org/update.js');
		});

		it('should define global variable "$buoop" with undefined field values', function(){
			element = createDirective();
			var $buoop = $window.$buoop;
			expect($buoop).toBeDefined();

			expect($buoop.vs).toBeUndefined();
			expect($buoop.l).toBeUndefined();
			expect($buoop.reminder).toBeUndefined();
			expect($buoop.text).toBeUndefined();
			expect($buoop.test).toBeUndefined();
			expect($buoop.newwindow).toBeUndefined();
			//expect($buoop.onshow).toBeUndefined();
			//expect($buoop.onclick).toBeUndefined();

		});
	});

	describe('when created with options', function(){
		describe('from attributes', function(){
			it('should contains an inner "script" element', function(){

				element = createDirective(null,attrOptionsTemplate);
				expect(element).toBeDefined();

				children = element.children();
				expect(children.length).toEqual(1); // one inner child (the script element)
				expect(children[0].tagName).toEqual('SCRIPT');
				expect(children[0].src).toEqual('http://browser-update.org/update.js');
			});

			it('should define global variable "$buoop" with provided field values', function(){
				
				element = createDirective(null,attrOptionsTemplate);
				var $buoop = $window.$buoop;
				expect($buoop).toBeDefined();

				expect($buoop.vs).toEqual({i:8,f:8,o:9.63,s:2,c:8});
				expect($buoop.l).toEqual("it");
				expect($buoop.reminder).toEqual(1);
				expect($buoop.text).toEqual("This is my custom notification message");
				expect($buoop.test).toBe(true);
				expect($buoop.newwindow).toBe(true);

			});
		});

		describe('from scope', function(){
			it('should contains an inner "script" element', function(){

				$scope.versions = {i:8,f:8,o:9.63,s:2,c:8};
				$scope.language = 'it';
				$scope.reminder = 1;
				$scope.newWindow = true;
				$scope.alwaysShowBar = true;
				$scope.notificationText = 'This is my custom notification message';
				$scope.onNotificationBarShown = function(info){};
				$scope.onNotificationBarClicked = function(info){};

				element = createDirective(null,scopeOptionsTemplate);
				expect(element).toBeDefined();

				children = element.children();
				expect(children.length).toEqual(1); // one inner child (the script element)
				expect(children[0].tagName).toEqual('SCRIPT');
				expect(children[0].src).toEqual('http://browser-update.org/update.js');
			});

			it('should define global variable "$buoop" with provided field values', function(){

				$scope.versions = {i:8,f:8,o:9.63,s:2,c:8};
				$scope.language = 'it';
				$scope.reminder = 1;
				$scope.newWindow = true;
				$scope.alwaysShowBar = true;
				$scope.notificationText = 'This is my custom notification message';
				$scope.onNotificationBarShown = function(info){};
				$scope.onNotificationBarClicked = function(info){};

				element = createDirective(null,scopeOptionsTemplate);
				var $buoop = $window.$buoop;
				expect($buoop).toBeDefined();

				expect($buoop.vs).toEqual({i:8,f:8,o:9.63,s:2,c:8});
				expect($buoop.l).toEqual("it");
				expect($buoop.reminder).toEqual(1);
				expect($buoop.text).toEqual("This is my custom notification message");
				expect($buoop.test).toBe(true);
				expect($buoop.newwindow).toBe(true);
				expect($buoop.onshow).toBeDefined();
				expect($buoop.onclick).toBeDefined();

			});
		});
	});
	
});