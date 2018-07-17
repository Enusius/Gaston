import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthTestListComponent } from './strength-test-list.component';

describe('StrengthTestListComponent', () => {
  let component: StrengthTestListComponent;
  let fixture: ComponentFixture<StrengthTestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthTestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
