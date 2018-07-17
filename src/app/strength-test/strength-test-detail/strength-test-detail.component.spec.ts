import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthTestDetailComponent } from './strength-test-detail.component';

describe('StrengthTestDetailComponent', () => {
  let component: StrengthTestDetailComponent;
  let fixture: ComponentFixture<StrengthTestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthTestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthTestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
