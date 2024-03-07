import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { Apod } from '../../../models/apod';
import { ApodService } from '../../../services/apod.service';

@Component({
  selector: 'app-apod-info',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './apod-info.component.html',
  styleUrl: './apod-info.component.scss'
})
export class ApodInfoComponent implements OnInit, OnChanges{


  // today date in string format yyyy-mm-dd
  @Input() date: string = new Date().toISOString().split('T')[0];

  apod: Apod = new Apod();
  error = false;
  errorMesssage = '';

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    console.log('onInit: ');
    
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes: ' + JSON.stringify(changes));
    if (changes['date']) {
      this.service.getApod(changes['date'].currentValue);
    }
    
  }

}
