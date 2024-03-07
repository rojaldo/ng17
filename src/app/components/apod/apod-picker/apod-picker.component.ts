import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apod-picker',
  standalone: true,
  imports: [NgbDatepickerModule],
  templateUrl: './apod-picker.component.html',
  styleUrl: './apod-picker.component.scss'
})
export class ApodPickerComponent {

@Output() onDateSelected = new EventEmitter<string>();

  dateSelected(date: any) {
    const dateStr = `${date.year}-${date.month}-${date.day}`;
    this.onDateSelected.emit(dateStr);
  }
}
