import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { YouTubePlayer } from '@angular/youtube-player';
import { Apod } from '../../../models/apod';
import { ApodInfoComponent } from '../apod-info/apod-info.component';
import { ApodPickerComponent } from '../apod-picker/apod-picker.component';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [JsonPipe, ApodInfoComponent, ApodPickerComponent],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit{

  apod: Apod = new Apod();
  errorMesssage = '';
  error = false;
  // today date in string format yyyy-mm-dd
  dateStr = new Date().toISOString().split('T')[0];

  constructor() { }

  ngOnInit(): void {

  }

  dateSelected(date: string) {
    
    this.dateStr = date;
    console.log('Date selected: ' + this.dateStr);
    
  }
}
