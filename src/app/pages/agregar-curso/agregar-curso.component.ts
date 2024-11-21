import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-curso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-curso.component.html',
  styleUrl: './agregar-curso.component.scss'
})
export class AgregarCursoComponent {
  nombreCurso: string = '';
  nombreInstructor: string = '';
  fechaInicio: string = '';
  duracion: number | null = null;
  descripcion: string = '';
  mostrarErrores: boolean = false;

  agregarCurso() {
    if (this.validarFormulario()) {
      const curso = {
        id: Date.now(),
        nombreCurso: this.nombreCurso,
        nombreInstructor: this.nombreInstructor,
        fechaInicio: this.fechaInicio,
        duracion: this.duracion,
        descripcion: this.descripcion
      };

      this.guardarCurso(curso)
      this.reiniciarFormulario()
      this.mostrarErrores = false
    } else {
      this.mostrarErrores = true
    }
  }

  
  validarFormulario(): boolean {
    return this.nombreCurso !== '' && this.nombreInstructor !== '' && this.fechaInicio !== '' &&
                                this.duracion !== null && this.descripcion !== '';
  }


  guardarCurso(curso: any) {
    let cursos = JSON.parse(localStorage.getItem('cursos') || '[]');
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
  }

  
  reiniciarFormulario() {
    this.nombreCurso = '';
    this.nombreInstructor = '';
    this.fechaInicio = '';
    this.duracion = null;
    this.descripcion = '';
  }
}
