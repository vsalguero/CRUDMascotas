import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarMascotaComponent } from './agregar-editar-mascota.component';

describe('AgregarEditarMascotaComponent', () => {
  let component: AgregarEditarMascotaComponent;
  let fixture: ComponentFixture<AgregarEditarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarMascotaComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
