import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CursosService } from '../../services/cursos.service';

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

  constructor(private cursosService: CursosService) {  }

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

      this.cursosService.guardarCurso(curso)
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



  reiniciarFormulario() {
    this.nombreCurso = '';
    this.nombreInstructor = '';
    this.fechaInicio = '';
    this.duracion = null;
    this.descripcion = '';
  }
}
