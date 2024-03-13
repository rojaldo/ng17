import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  hero = new Hero('','');

  namePattern = /^[a-zA-Z ]{3,6}$/;

  submitted = false;

  onSubmit() { 
    console.log('Form submitted!: ' + JSON.stringify(this.hero));
    this.submitted = true; 
  }

  newHero() {
    this.hero = new Hero('','');
  }

}
