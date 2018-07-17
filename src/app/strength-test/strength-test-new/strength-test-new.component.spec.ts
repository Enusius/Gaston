import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthTestNewComponent } from './strength-test-new.component';

describe('StrengthTestNewComponent', () => {
  let component: StrengthTestNewComponent;
  let fixture: ComponentFixture<StrengthTestNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthTestNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthTestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
