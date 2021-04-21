import { Component, OnInit } from '@angular/core';

import { RateBlock } from '../../interfaces';
import { RateBlockQuery } from '../../../shared/tables/rate-block/state/rate-block.query';

@Component({
  selector: 'bv-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public cashVal = 1000;
  public rateBlocks: RateBlock[];

  constructor(
    private rateBlockQuery: RateBlockQuery
  ) { }

  /**
   * Life Cycle Hook: Initial component
   *
   * @memberof LandingComponent
   */
  ngOnInit() {
    this.rateBlocks = this.rateBlockQuery.getAll();
  }


  /**
   * Emit the slided to value
   *
   * @param {*} val
   * @memberof WaitingListComponent
   */
  public onSlide(val: number) {
    this.cashVal = val;
  }

}
