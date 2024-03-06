import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit{

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.getApod();
  }
}
