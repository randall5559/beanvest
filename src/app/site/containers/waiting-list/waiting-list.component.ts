import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { RateBlock } from '../../interfaces';
import { EmailsQuery } from '../../../shared/tables/emails/state/emails.query';
import { EmailsService } from '../../../shared/tables/emails/state/emails.service';
import { RateBlockQuery } from '../../../shared/tables/rate-block/state/rate-block.query';


@Component({
  selector: 'bv-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.css']
})
export class WaitingListComponent implements OnInit {
  public emailFormControl: FormControl;
  public emailAlreadyExist = false;
  public cashVal = 1000;
  public rateBlocks: RateBlock[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private emailsQuery: EmailsQuery,
    private emailsService: EmailsService,
    private rateBlockQuery: RateBlockQuery
  ) { }


  /**
   * Life Cycle Hook: Initial component
   *
   * @memberof WaitingListComponent
   */
  public ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.rateBlocks = this.rateBlockQuery.getAll();
  }


  /**
   * Add email to Firebase
   *
   * @memberof WaitingListComponent
   */
  public addEmail() {
    const emailFieldVal = this.emailFormControl.value;
    const hasError = this.emailFormControl.hasError('email');

    if (emailFieldVal && !hasError) {
      const hasEntity = this.emailsQuery.hasEntity(e => e.email === emailFieldVal);

      if (!hasEntity) {
        this.emailsService.addEmail(emailFieldVal)
          .then(() => {
            this.displayMessage(`Your email has been saved! We'll reach out to you once Beanvest Beta is ready.`);
          })
          .catch(this.handleError);

        this.emailAlreadyExist = false;
        this.emailFormControl.clearValidators();
        this.emailFormControl.reset();
      } else {
        this.emailAlreadyExist = true;
        this.emailFormControl.setValue('');
      }
    }
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

  private handleError = () => {
    this.displayMessage(`Error saving email try again.`);
  }

  private displayMessage(msg) {
    this.snackBar.open(
      msg,
      'close',
      {
        duration: 10000,
        verticalPosition: 'top'
      }
    );
  }
}
