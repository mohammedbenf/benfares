import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/modals/icontact';
import { ManageContactsService } from 'src/services/manage-contacts/manage-contacts.service';

@Component({
  selector: 'app-contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrls: ['./contact-forms.component.scss']
})
export class ContactFormsComponent implements OnInit {
  contact: IContact;
  contacts: Array<IContact>;
  constructor(private manageContact: ManageContactsService) { 
    this.contact = {
      lastname: null,
      firstname: null,
      phoneNumber: null,
      email: null
    }
  }

  ngOnInit() {
  }

  onSubmit(contact: IContact) {
    console.log(contact);
    this.contacts = this.manageContact.addContact(contact);
    console.log(this.contacts);
  }

}
