import { Component, OnInit } from '@angular/core';
import { BeersService } from '../../../services/beers.service';
import { Beer } from '../../../models/beer';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { map, of } from 'rxjs';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { BeerListComponent } from '../beer-list/beer-list.component';
import { BeerSelectComponent } from '../beer-select/beer-select.component';
import { FilterBeersPipe } from '../../../pipes/filter-beers.pipe';
import { OrderBeersPipe } from '../../../pipes/order-beers.pipe';
import { AsyncPipe } from '@angular/common';

enum OrderOption{
  alphAsc,
  alphDesc,
  abvAsc,
  abvDesc
}

@Component({
  selector: 'app-beers',
  standalone: true,
  imports: [ BeerListComponent, BeerSelectComponent, FilterBeersPipe, OrderBeersPipe, AsyncPipe],
  templateUrl: './beers.component.html',
  styleUrl: './beers.component.scss'
})
export class BeersComponent implements OnInit{

  beers: Beer[] = [];
  minRange = 4;
  maxRange = 6;
  order = OrderOption.abvAsc;
  orderOptions = OrderOption;

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    console.log('onInit: ');
    this.service.beers$.subscribe(beers => {
      this.beers = beers;
    });
    this.service.getBeers();
  }

  handleSelection(selection: any) {
    console.log('Selection: ' + JSON.stringify(selection));
    this.minRange = selection.lowRange;
    this.maxRange = selection.highRange;
    this.order = selection.order;
  }


}


