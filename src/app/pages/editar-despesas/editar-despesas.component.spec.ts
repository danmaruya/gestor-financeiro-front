import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDespesasComponent } from './editar-despesas.component';

describe('EditarDespesasComponent', () => {
  let component: EditarDespesasComponent;
  let fixture: ComponentFixture<EditarDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDespesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
