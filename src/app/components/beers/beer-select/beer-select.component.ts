import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderOption } from '../../../enums/order-option';

@Component({
  selector: 'app-beer-select',
  standalone: true,
  imports: [NgbDropdownModule, NgxSliderModule],
  templateUrl: './beer-select.component.html',
  styleUrl: './beer-select.component.scss'
})
export class BeerSelectComponent {

  @Output() onSelection = new EventEmitter<any>();

  minValue = 4;
  maxValue = 5;

  options: Options = {
    floor: 0,
    ceil: 100,
    step: 0.1
  };

  orderOption = OrderOption;
  myOption = OrderOption.alphAsc;
  
  constructor() { }

  handleDropDownClick(option: OrderOption) {
    this.myOption = option;
    this.onSelection.emit({lowRange: this.minValue, highRange: this.maxValue, order: this.myOption});
  }

  handleRangeChange(event: any) {
    this.minValue = event.value;
    this.maxValue = event.highValue;
    this.onSelection.emit({lowRange: this.minValue, highRange: this.maxValue, order: this.myOption});
  }
}
