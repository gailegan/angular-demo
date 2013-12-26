// router configuration.
app.config( function( $routeProvider, $httpProvider ) {

	console.log( 'initialize configuration' );

	// uncomment this to add additional headers params to all http requests.
	//$httpProvider.defaults.headers.common['key'] = 'value';

	$routeProvider
		.when('/', {
			templateUrl: 'templates/companies.html',
			controller : 'CompaniesController'
		})
		.when('/contacts', {
			templateUrl: 'templates/contacts.html',
			controller: 'ContactsController'
		})
		.when('/contactedit/:contactId', {
			templateUrl: 'templates/contact-edit.html',
			controller: 'ContactEditController'
		})		
		.when('/companies', {
			templateUrl: 'templates/companies.html',
			controller: 'CompaniesController'
		})		
		.otherwise({redirectTo: '/companies'});
});	