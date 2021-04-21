import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bv-rate-block',
  templateUrl: './rate-block.component.html',
  styleUrls: ['./rate-block.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RateBlockComponent implements OnInit {

  @Input() isLargeTitle = false;
  @Input() title: string;
  @Input() width = '70%';
  @Input() percent = '50';
  @Input() value: number;
  @Input() bgColor = '#CCC';
  @Input() percentColor = '#000';
  @Input() amountColor = '#000';

  constructor() { }

  ngOnInit() { }

}
