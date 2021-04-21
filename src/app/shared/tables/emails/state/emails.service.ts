import { Injectable } from '@angular/core';
import { EmailsStore } from './emails.store';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { EmailItem, createWaitingListItem } from './emails.model';

@Injectable({ providedIn: 'root' })
export class EmailsService {

  private emails: AngularFirestoreCollection<EmailItem>;

  constructor(
    private emailsStore: EmailsStore,
    private db: AngularFirestore
  ) {
    this.emails = this.db.collection('emails');
    this.fetch();
  }

  /**
   * Loads all email records into emails store
   *
   * @memberof EmailsService
   */
  public fetch() {
    this.emails.valueChanges()
      .subscribe((item: EmailItem[]) => {
        this.emailsStore.set(item);
      });
  }

  /**
   * Add email to DB and emails store
   *
   * @param {string} email
   * @memberof EmailsService
   */
  public async addEmail(email: string) {
    const id = this.db.createId();
    const item = { id, email };
    try {
      await this.emails.doc(id).set(item);
      this.emailsStore.add(createWaitingListItem(item));
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Delete email from DB and emails store
   *
   * @param {string} id
   * @memberof EmailsService
   */
  public async delete(id: string) {
    try {
      await this.emails.doc(id).delete();
      this.emailsStore.remove(id);
    } catch (error) {
      console.error(error);
    }

  }

  /**
   * Update email in DB and emails store
   *
   * @param {string} id
   * @param {string} email
   * @memberof EmailsService
   */
  public async update(id: string, email: string) {
    try {
      await this.emails.doc(id).update({ email });
      this.emailsStore.update(id, { email });
    } catch (error) {
      console.error(error);
    }
  }
}
