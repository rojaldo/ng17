import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ApodComponent } from './components/apod/apod/apod.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { FormsComponent } from './components/forms/forms/forms.component';
import { CountriesComponent } from './components/countries/countries/countries.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatorComponent, HeroesComponent, ApodComponent, NgbNavModule, BeersComponent, FormsComponent, CountriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  active = 6;

}
