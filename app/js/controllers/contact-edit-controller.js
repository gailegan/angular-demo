app.controller( 'ContactEditController', function( $scope, $routeParams, ContactsService ) {
	console.log( 'initialize Contact Edit Controller' );
	var contactId = ($routeParams.contactId) ? parseInt($routeParams.contactId) : 0,
	isEdit = false;
	$scope.contact = ContactsService.getContact(contactId);
});	

