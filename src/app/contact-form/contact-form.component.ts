import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
      { id: 1, name: 'Email'},
      { id: 2, name: 'Phone'},
      { id: 3, name: 'Other'},
    ]

  log(x: any) { console.log(x) };

  onSubmit(f: NgForm) {
    console.log(f);
    console.log('form submitted', f.submitted);
  }
}
