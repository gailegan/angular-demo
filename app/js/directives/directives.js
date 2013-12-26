// directives.
var directives;

directives = angular.module('app.directives', []);

directives.directive('click', function() {
	
	var linkFunc = function( scope, iElem, iAttrs ) {
		iElem.on( 'click', function() {
			alert( 'Click' );
		});
	};

	return {
		restrict: 'A',
		link: linkFunc
	};
})