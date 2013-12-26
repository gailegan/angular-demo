var contactsService;
contactsService = angular.module('app.contactsService', ['ngResource']);

contactsService.service('ContactsService', function(){
	this.contacts = [
						  {
						    id: 0,
						    name: 'dev-ymspol-01.ops.sp2.yahoo.com',
						    property: 'YAMAS (US)',
						    type: 'nodeEntity'
						  },
						  {
						    id: 1,
						    name: 'dev-ymspol-02.ops.sp2.yahoo.com',
						    property: 'YAMAS (US)',
						    type: 'nodeEntity'
						  },
						  {
						    id: 2,
						    name: 'qa-jack-01.ops.sp2.yahoo.com',
						    property: 'YAMAS (US)',
						    type: 'nodeEntity'
						  },
						  {
						    id: 3,
						    name: 'qajack-02.ops.sp2.yahoo.com',
						    property: 'YAMAS (US)',
						    type: 'nodeEntity'
						  }  
					];
					  
    this.getContacts = function() {
        return this.contacts;
    };

    this.getContact = function(contactId) {
    	return this.contacts[contactId];
    };
});