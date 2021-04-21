import { Injectable } from '@angular/core';
import { StoreConfig, EntityState, EntityStore } from '@datorama/akita';
import { RateBlock } from './rate-block.model';

export interface RateBlockState extends EntityState<RateBlock> { }


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'rate-block' })
export class RateBlockStore extends EntityStore<RateBlockState, RateBlock> {

  private initialState: RateBlock[] = [
    {
      id: 1,
      title: 'Beanvest',
      percent: 20,
      bgColor: '#21CE99',
      percentColor: '#ffffff',
      amountColor: '#FFC107',
      isLargeTitle: true
    },
    {
      id: 2,
      title: 'American Express',
      percent: 0.55,
      width: '30%'
    },
    {
      id: 3,
      title: 'National Average',
      percent: 0.43,
      width: '20%'
    },
    {
      id: 4,
      title: 'Bank of America',
      percent: 0.05,
      width: '15%'
    },
  ];

  constructor() {
    super();
    this.set(this.initialState);
  }

}

