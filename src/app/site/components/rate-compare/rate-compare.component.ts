import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'bv-rate-compare',
  templateUrl: './rate-compare.component.html',
  styleUrls: ['./rate-compare.component.css']
})
export class RateCompareComponent implements OnInit {
  @Input() public defaultValue: number;
  @Input() public min: number;
  @Input() public max: number;
  @Input() public step: number;
  @Output() public value = new EventEmitter();

  public cashValue: number;

  constructor() { }


  public ngOnInit() {
    this.cashValue = this.defaultValue;
  }


  /**
   * Update display cash value base upon slider position
   *
   * @param {MatSliderChange} event
   * @memberof RateCompareComponent
   */
  public onMove(event: any) {
    this.cashValue = event.value;
    this.value.emit(event.value);
  }
  
}
