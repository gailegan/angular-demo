// app - main module, inject directives, filters & services.
app = angular.module('app', [
	'app.filters', 
	'app.directives', 
	'app.contactsService'
	]);

// constants.
app.constant('constants', {
	KEY : 'value'
});

// application main entry point.
app.run(function() {
	
	// put some global stuff...
	console.log( 'initialize run phase' );
});