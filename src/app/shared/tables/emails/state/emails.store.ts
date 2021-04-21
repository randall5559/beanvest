import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { EmailItem } from './emails.model';

export interface EmailsState extends EntityState<EmailItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'emails' })
export class EmailsStore extends EntityStore<EmailsState, EmailItem> {

  constructor() {
    super();
  }

}

