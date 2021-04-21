import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialDesignModule } from '../../../material-design/material-design.module';

import { RateCompareComponent } from './rate-compare.component';

describe('RateCompareComponent', () => {
  let component: RateCompareComponent;
  let fixture: ComponentFixture<RateCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialDesignModule ],
      declarations: [ RateCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCompareComponent);
    component = fixture.componentInstance;

    spyOn(component.value, 'emit').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update cash value variable when slide is move - onMove();', () => {
    component.onMove({
      value: 100
    });

    expect(component.cashValue).toEqual(100);
    expect(component.value.emit).toHaveBeenCalledWith(100);
  });
});
