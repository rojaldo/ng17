import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

function validateHeroName(control: AbstractControl) {
  const name = control.value;
  // get the name value as a string
  let nameStr = control.value.toString();
  // check that first letter is uppercase
  return nameStr.charAt(0) !== nameStr.charAt(0).toUpperCase() ? { 'nameNotCapitalized': true } : null;
}

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]{3,6}$'), validateHeroName]],
    description: [''],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
