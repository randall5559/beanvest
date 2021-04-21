import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateBlockComponent } from './rate-block.component';

describe('RateBlockComponent', () => {
  let component: RateBlockComponent;
  let fixture: ComponentFixture<RateBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
