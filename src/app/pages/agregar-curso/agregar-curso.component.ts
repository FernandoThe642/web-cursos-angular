import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-agregar-curso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-curso.component.html',
  styleUrl: './agregar-curso.component.scss'
})
export class AgregarCursoComponent {
  nombreCurso: string = ''
  nombreInstructor: string = ''
  fechaInicio: string = ''
  duracion: number = 1
  descripcion: string = ''
  error: boolean = false
  exito: boolean = false

  constructor(private cursosService: CursosService) {  }

  agregarCurso() {
    if (this.validarFormulario()) {
      this.cursosService.guardarCurso(
        this.nombreCurso,
        this.nombreInstructor,
        this.fechaInicio,
        this.duracion,
        this.descripcion
      )         

      this.reiniciarFormulario()
      this.error = false
      this.exito = true
    } else {
      this.error = true
      this.exito = false
    }
    setTimeout(() => {
      this.exito = false
    }, 3000)
  }

  
  validarFormulario(): boolean {
    return this.nombreCurso !== '' && this.nombreInstructor !== '' && this.fechaInicio !== '' &&
                                this.duracion !== null && this.descripcion !== ''
  }



  reiniciarFormulario() {
    this.nombreCurso = ''
    this.nombreInstructor = ''
    this.fechaInicio = ''
    this.duracion =  1
    this.descripcion = ''
  }
}
