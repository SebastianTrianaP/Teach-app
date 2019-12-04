import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderActividadComponent } from './responder-actividad.component';

describe('ResponderActividadComponent', () => {
  let component: ResponderActividadComponent;
  let fixture: ComponentFixture<ResponderActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponderActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponderActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
