import { Component } from '@angular/core';
import { TemplateFormComponent } from '../template-form/template-form.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [TemplateFormComponent, ReactiveFormComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

}
