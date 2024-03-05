import { Component, Input } from '@angular/core';
import { CalculatorService } from '../../../services/calculator.service';
import { DisplayComponent } from '../display/display.component';
import { KeyboardComponent } from '../keyboard/keyboard.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [DisplayComponent, KeyboardComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  info = '';

  constructor(private service: CalculatorService) { }

  handleClick(value: string | number) {
    (typeof value === 'string') ? this.info = this.service.handleSymbol(value): this.info = this.service.handleNumber(value);
  }


}
