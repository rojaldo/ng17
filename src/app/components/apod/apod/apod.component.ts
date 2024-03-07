import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { YouTubePlayer } from '@angular/youtube-player';
import { Apod } from '../../../models/apod';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [JsonPipe, NgbDatepickerModule, FormsModule, YouTubePlayer],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit{

  apod: Apod = new Apod();
  errorMesssage = '';
  error = false;

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    const observer = {
      next: (response: Apod) => {
        console.log('next: ' + response);
        this.apod = response;
      },
      error: (error: any) => {
        console.error(error);
        this.error = true;
        this.errorMesssage = error;
      }
    }
    this.service.apodInfo$.subscribe(observer);
    this.service.getApod();
  }

  dateSelected(date: any) {
    console.log(date);
    // date as a string in the format 'YYYY-MM-DD'
    const dateStr = `${date.year}-${date.month}-${date.day}`;
    console.log(dateStr);
    
    this.service.getApod(dateStr);
  }
}
