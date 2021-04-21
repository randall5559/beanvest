import { ID } from '@datorama/akita';

export interface RateBlock {
  id: ID;
  title: string;
  isLargeTitle?: boolean;
  percent: number;
  bgColor?: string;
  percentColor?: string;
  amountColor?: string;
  width?: string;
}

/**
 * A factory function that creates RateBlock
 */
export function createRateBlock(params: Partial<RateBlock>) {
  return {

  } as RateBlock;
}
