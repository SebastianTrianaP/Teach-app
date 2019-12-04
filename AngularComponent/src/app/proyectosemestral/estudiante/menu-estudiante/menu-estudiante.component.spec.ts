import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEstudianteComponent } from './menu-estudiante.component';

describe('MenuEstudianteComponent', () => {
  let component: MenuEstudianteComponent;
  let fixture: ComponentFixture<MenuEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
