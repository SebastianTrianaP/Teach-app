import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadViewComponent } from './actividad-view.component';

describe('ActividadViewComponent', () => {
  let component: ActividadViewComponent;
  let fixture: ComponentFixture<ActividadViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
