import { Component, OnInit } from '@angular/core';
import { BeersService } from '../../../services/beers.service';
import { Beer } from '../../../models/beer';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { map, of } from 'rxjs';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { BeerListComponent } from '../beer-list/beer-list.component';
import { BeerSelectComponent } from '../beer-select/beer-select.component';

enum OrderOption{
  alphAsc,
  alphDesc,
  abvAsc,
  abvDesc
}

@Component({
  selector: 'app-beers',
  standalone: true,
  imports: [ BeerListComponent, BeerSelectComponent],
  templateUrl: './beers.component.html',
  styleUrl: './beers.component.scss'
})
export class BeersComponent implements OnInit{

  beers: Beer[] = [];
  showBeers: Beer[] = [];



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
        of(this.showBeers).pipe(
          map(beers => beers.sort((a, b) => a.name.localeCompare(b.name))
        )).subscribe(observer)
        break;
      case OrderOption.alphDesc:
        // this.showBeers = this.beers.sort((a, b) => b.name.localeCompare(a.name));
        of(this.showBeers).pipe(
          map(beers => beers.sort((a, b) => b.name.localeCompare(a.name))
        )).subscribe(observer)
        break;
      case OrderOption.abvAsc:
        // his.showBeers = this.beers.sort((a, b) => a.abv - b.abv);
        of(this.showBeers).pipe(
          map(beers => beers.sort((a, b) => a.abv - b.abv)
        )).subscribe(observer)
        break;
      case OrderOption.abvDesc:
        // this.showBeers = this.beers.sort((a, b) => b.abv - a.abv);
        of(this.showBeers).pipe(
          map(beers => beers.sort((a, b) => b.abv - a.abv)
        )).subscribe(observer)
        break;
      default:
        this.showBeers = this.beers;
    }
  }

  handleRangeChange(min: number, max: number) {

    this.showBeers = this.beers.filter(beer => beer.abv >= min && beer.abv <= max);
  }

  handleSelection(selection: any) {
    console.log('Selection: ' + JSON.stringify(selection));
    this.handleRangeChange(selection.lowRange, selection.highRange);
    this.handleDropDownClick(selection.order);

  }


}


