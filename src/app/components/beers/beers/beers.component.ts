import { Component, OnInit } from '@angular/core';
import { BeersService } from '../../../services/beers.service';
import { Beer } from '../../../models/beer';

@Component({
  selector: 'app-beers',
  standalone: true,
  imports: [],
  templateUrl: './beers.component.html',
  styleUrl: './beers.component.scss'
})
export class BeersComponent implements OnInit{

  beers: Beer[] = [];

  constructor(private service: BeersService) { }
  ngOnInit(): void {
    console.log('onInit: ');
    this.service.beers$.subscribe(beers => {
      this.beers = beers;
    });
    this.service.getBeers();
  }

}
