import { ID } from '@datorama/akita';

export interface EmailItem {
  id: ID;
  email: string;
}

/**
 * A factory function that creates WaitingList
 */
export function createWaitingListItem(item: Partial<EmailItem>) {
  return item as EmailItem;
}
