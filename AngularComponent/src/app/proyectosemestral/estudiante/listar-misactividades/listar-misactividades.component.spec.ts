import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMisactividadesComponent } from './listar-misactividades.component';

describe('ListarMisactividadesComponent', () => {
  let component: ListarMisactividadesComponent;
  let fixture: ComponentFixture<ListarMisactividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMisactividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMisactividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
