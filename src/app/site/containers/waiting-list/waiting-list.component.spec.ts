import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MaterialDesignModule } from '../../../material-design/material-design.module';
import { AngularFireModule } from 'angularfire2';
import { inject, async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { MatSnackBar } from '@angular/material';

import { WaitingListComponent } from './waiting-list.component';
import { RateCompareComponent } from '../../components/rate-compare/rate-compare.component';
import { RateBlockComponent } from './../../components/rate-block/rate-block.component';
import { environment } from './../../../../environments/environment.dev';

describe('WaitingListComponent', () => {
  let component: WaitingListComponent;
  let fixture: ComponentFixture<WaitingListComponent>;
  let snackBar: MatSnackBar;

  const emails = [
    { email: 'fake@email.com' }
  ];

  class MockAngularFirestore {
    public collection() {
      return {
        valueChanges: () => of(emails),
        add: () => {}
      }
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        MaterialDesignModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
      ],
      declarations: [
        WaitingListComponent,
        RateCompareComponent,
        RateBlockComponent
      ],
      providers: [
        { provide: AngularFirestore, useClass: MockAngularFirestore },
        MatSnackBar
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(inject([MatSnackBar], (_MatSnackBar_) => {
    snackBar = _MatSnackBar_;

    fixture = TestBed.createComponent(WaitingListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    spyOn(component.emailFormControl, 'setValue').and.callThrough();
    spyOn(component.emailFormControl, 'reset').and.callThrough();
    spyOn(snackBar, 'open').and.callThrough();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an email on validated successfully - addEmail()', () => {
    component.emailFormControl.setValue('12345@email.com');
    component.addEmail();

    expect(component.emailFormControl.reset).toHaveBeenCalled();
    expect(snackBar.open).toHaveBeenCalled();
    expect(component.emailAlreadyExist).toBeFalsy();
  });

  it('should reject an email if already saved - addEmail()', () => {
    component.emailFormControl.setValue('fake@email.com');
    component.addEmail();

    expect(component.emailFormControl.setValue).toHaveBeenCalled();
    expect(component.emailAlreadyExist).toBeTruthy();
  });

  it('should set the cashVal variable when - onSlide() is trigger', () => {
    component.onSlide(100);

    expect(component.cashVal).toEqual(100);
  });
});
