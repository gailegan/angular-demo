app.controller( 'ContactsController', function( $scope, ContactsService) {
	console.log( 'initialize Contacts Controller' );
	$scope.showResults = false;
	$scope.contacts = 	ContactsService.getContacts();
	$scope.displayResults = function () {
		$scope.showResults = true;
	}

});	

