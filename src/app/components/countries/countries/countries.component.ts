import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit{

  countries: string[] = [];

  country: string | null = null;

	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : this.countries.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.service.countriesNames$.subscribe(countries => {
      this.countries = countries;
    });
    this.service.getCountries();
  }

}
