import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../../../services/trivia.service';
import { TriviaCard } from '../../../models/triviacard';
import { TriviaCardComponent } from '../trivia-card/trivia-card.component';

@Component({
  selector: 'app-trivia',
  standalone: true,
  imports: [TriviaCardComponent],
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.scss'
})
export class TriviaComponent implements OnInit{

  cards: TriviaCard[] = [];

  constructor(private service: TriviaService) { }

  ngOnInit(): void {
    this.service.getTrivia();
    this.service.cards$.subscribe((cards) => {
      this.cards = cards;
    });
  }


}
