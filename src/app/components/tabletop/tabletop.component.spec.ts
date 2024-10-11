import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletopComponent } from './tabletop.component';

describe('TabletopComponent', () => {
  let component: TabletopComponent;
  let fixture: ComponentFixture<TabletopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabletopComponent]
    });
    fixture = TestBed.createComponent(TabletopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
