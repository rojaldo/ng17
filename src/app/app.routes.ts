import { Routes } from '@angular/router';
import { beersGuard } from './guards/beers.guard';

export const routes: Routes = [
    { path: 'calculator', loadComponent: () => import('./components/calculator/calculator/calculator.component').then(m => m.CalculatorComponent) },
    { path: 'heroes', loadComponent: () => import('./components/heroes/heroes/heroes.component').then(m => m.HeroesComponent), },
    { path: 'apod', loadComponent: () => import('./components/apod/apod/apod.component').then(m => m.ApodComponent)},
    { path: 'beers', loadComponent: () => import('./components/beers/beers/beers.component').then(m => m.BeersComponent), canActivate: [beersGuard]},
    { path: 'forms', loadComponent: () => import('./components/forms/forms/forms.component').then(m => m.FormsComponent)},
    { path: 'countries', loadComponent: () => import('./components/countries/countries/countries.component').then(m => m.CountriesComponent)},
    { path: 'trivia', loadComponent: () => import('./components/trivia/trivia/trivia.component').then(m => m.TriviaComponent)},
    { path: '', redirectTo: '/calculator', pathMatch: 'full' },
    { path: '**', redirectTo: '/calculator' }

];
