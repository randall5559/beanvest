import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RateBlockStore, RateBlockState } from './rate-block.store';
import { RateBlock } from './rate-block.model';

@Injectable({
  providedIn: 'root'
})
export class RateBlockQuery extends QueryEntity<RateBlockState, RateBlock> {

  constructor(protected store: RateBlockStore) {
    super(store);
  }

}
