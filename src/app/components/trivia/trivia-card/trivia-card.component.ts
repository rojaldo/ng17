import { Component, Input } from '@angular/core';
import { TriviaCard } from '../../../models/triviacard';

@Component({
  selector: 'app-trivia-card',
  standalone: true,
  imports: [],
  templateUrl: './trivia-card.component.html',
  styleUrl: './trivia-card.component.scss'
})
export class TriviaCardComponent {

  @Input() card: TriviaCard = new TriviaCard();

}
