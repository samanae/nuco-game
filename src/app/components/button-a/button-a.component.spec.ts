import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAComponent } from './button-a.component';

describe('ButtonAComponent', () => {
  let component: ButtonAComponent;
  let fixture: ComponentFixture<ButtonAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAComponent]
    });
    fixture = TestBed.createComponent(ButtonAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
