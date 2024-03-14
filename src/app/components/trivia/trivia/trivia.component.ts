import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../../../services/trivia.service';
import { TriviaCard } from '../../../models/triviacard';
import { TriviaCardComponent } from '../trivia-card/trivia-card.component';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-trivia',
  standalone: true,
  imports: [TriviaCardComponent, FormsModule, InfiniteScrollModule],
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.scss'
})
export class TriviaComponent implements OnInit{

  cards: TriviaCard[] = [];
  points = 0;

  constructor(private service: TriviaService) { }

  ngOnInit(): void {
    this.service.getTrivia();
    this.service.cards$.subscribe((cards) => {
      this.cards = cards;
    });
  }

  handleAnswer(rightAnswer: boolean){
    rightAnswer ? this.points +=2 : --this.points;
  }

  onScrollDown(){
    console.log('scrolled!!');
    
    this.service.getTrivia(10);
  }


}
