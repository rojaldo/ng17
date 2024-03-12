import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from '../../../services/calculator.service';
import { DisplayComponent } from '../display/display.component';
import { KeyboardComponent } from '../keyboard/keyboard.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [DisplayComponent, KeyboardComponent],
  providers: [CalculatorService],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit{

  info = '';

  constructor(private service: CalculatorService) { }

  ngOnInit(): void {
    this.service.display$.subscribe(display => {
      this.info = display;
    });
  }

  handleClick(value: string | number) {
    (typeof value === 'string') ? this.service.handleSymbol(value): this.service.handleNumber(value);
  }


}
