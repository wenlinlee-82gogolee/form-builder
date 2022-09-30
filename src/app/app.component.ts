import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  userprofileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],

    address: this.fb.group({
      address1: [''],
      address2: [''],
      state: [''],
      zip: [''],
    }),
  });

  onSubmit() {
    console.warn(this.userprofileForm.value);

    //accessing controls
    const firstName = this.userprofileForm.controls['firstName'].value;
    const lastName = this.userprofileForm.get('lastName')?.value;

    console.log(`first name is ${firstName}`);
    console.log(`last name is ${lastName}`);

    //accessing the nested group
    const address1 = this.userprofileForm.get(['address', 'address1'])?.value;
    const address2 = this.userprofileForm
      .get('address')
      ?.get('address2')?.value;
    console.log(`address1: ${address1}`);
    console.log(`address2: ${address2}`);
  }
}
