import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormsRoutingModule } from './contact-forms-routing.module';
import { ContactFormsComponent } from './contact-forms.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactFormsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactFormsRoutingModule
  ]
})
export class ContactFormsModule { }
