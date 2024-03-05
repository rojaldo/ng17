import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss'
})
export class KeyboardComponent {

  @Output() onButtonClicked = new EventEmitter<string | number>();


  handleClick(value: string | number) {
    this.onButtonClicked.emit(value);
  }
}
