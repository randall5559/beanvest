import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { EmailsStore, EmailsState } from './emails.store';
import { EmailItem } from './emails.model';

@Injectable({ providedIn: 'root' })
export class EmailsQuery extends QueryEntity<EmailsState, EmailItem> {

  constructor(protected store: EmailsStore) {
    super(store);
  }

}
