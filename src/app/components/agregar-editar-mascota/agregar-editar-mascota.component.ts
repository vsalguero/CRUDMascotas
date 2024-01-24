import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from 'src/app/interface/mascota';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css'],
})
export class AgregarEditarMascotaComponent {
  loading: boolean = false;

  form: FormGroup;

  agregarMascota() {
    //const nombre = this.form.get('nombre')?.value;

    const mascota: Mascota = {
      name: this.form.value.nombre,
      age: this.form.value.edad,
      breed: this.form.value.raza,
      color: this.form.value.color,
      weight: this.form.value.peso,
    };

    console.log(mascota);
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      color: ['', Validators.required],
      peso: ['', Validators.required],
      edad: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
}
