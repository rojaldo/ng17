import { Component, OnInit } from '@angular/core';
import { BeersService } from '../../../services/beers.service';
import { Beer } from '../../../models/beer';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { map, of } from 'rxjs';

enum OrderOption{
  alphAsc,
  alphDesc,
  abvAsc,
  abvDesc
}


@Component({
  selector: 'app-beers',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './beers.component.html',
  styleUrl: './beers.component.scss'
})
export class BeersComponent implements OnInit{

  beers: Beer[] = [];
  showBeers: Beer[] = [];

  orderOption = OrderOption;

  constructor(private service: BeersService) { }
  ngOnInit(): void {
    console.log('onInit: ');
    this.service.beers$.subscribe(beers => {
      this.beers = beers;
      this.showBeers = beers;
    });
    this.service.getBeers();
  }

  handleDropDownClick(option: OrderOption) {
    const observer = {
      next: (beers: Beer[]) => {
        this.showBeers = beers;
      }
    }
    switch(option) {
      case OrderOption.alphAsc:
        // this.showBeers = this.beers.sort((a, b) => a.name.localeCompare(b.name));
        of(this.beers).pipe(
          map(beers => beers.sort((a, b) => a.name.localeCompare(b.name))
        )).subscribe(observer)
        break;
      case OrderOption.alphDesc:
        // this.showBeers = this.beers.sort((a, b) => b.name.localeCompare(a.name));
        of(this.beers).pipe(
          map(beers => beers.sort((a, b) => b.name.localeCompare(a.name))
        )).subscribe(observer)
        break;
      case OrderOption.abvAsc:
        // his.showBeers = this.beers.sort((a, b) => a.abv - b.abv);
        of(this.beers).pipe(
          map(beers => beers.sort((a, b) => a.abv - b.abv)
        )).subscribe(observer)
        break;
      case OrderOption.abvDesc:
        // this.showBeers = this.beers.sort((a, b) => b.abv - a.abv);
        of(this.beers).pipe(
          map(beers => beers.sort((a, b) => b.abv - a.abv)
        )).subscribe(observer)
        break;
      default:
        this.showBeers = this.beers;
    }
  }

}


