app.controller('CompaniesController', function( $scope) {
	console.log( 'initialize Companies Controller' );

	$scope.companies = [
  
						  {
						    id: 0,
						    name: 'Yahoo!',
						    type: '',
						    parent: ''
						  },
						  {
						    id: 1,
						    name: 'AboveNet',
						    type: 'isp',
						    parent: ''
						  },
						  {
						    id: 2,
						    name: 'ARIN',
						    type: 'American Registry for Internet Numbers',
						    parent: ''
						  },
						  {
						    id: 3,
						    name: 'ARIN YAOO',
						    type: 'Yahoo!',
						    parent: 'ARIN'
						  },
						  {
						    id: 4,
						    name: 'ARIN YAHOO-3',
						    type: 'Yahoo Financial',
						    parent: 'ARIN'
						  }
						];
	
});