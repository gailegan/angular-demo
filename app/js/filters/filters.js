// filters.
var filters;

filters = angular.module('app.filters', []);

filters.filter( 'addtext', function() {
	return function( input ) {
		return input + '. I am extra text added by the addfilter';
	}
});