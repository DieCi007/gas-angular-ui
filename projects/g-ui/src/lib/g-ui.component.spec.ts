import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GUiComponent } from './g-ui.component';

describe('GUiComponent', () => {
  let component: GUiComponent;
  let fixture: ComponentFixture<GUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
