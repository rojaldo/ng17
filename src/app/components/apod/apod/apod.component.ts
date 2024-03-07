import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit{

  apod: any = {};
  errorMesssage = '';
  error = false;

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    const observer = {
      next: (response: any) => {
        this.apod = response;
      },
      error: (error: any) => {
        console.error(error);
        this.error = true;
        this.errorMesssage = error;
      },
      complete : () => {
        console.log('Request complete');
      }
    }
    this.service.apodInfo$.subscribe(observer);
    this.service.getApod();
  }
}
