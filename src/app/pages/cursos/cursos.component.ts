import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  
  cursos: any[] = []
  

  constructor(private cursosService: CursosService) {
  }

  ngOnInit() {
    this.obtenerCursos()
  }
  obtenerCursos() {
    this.cursos = this.cursosService.cargarCursos()
  }

    
  eliminarCurso(id: number) {
    this.cursosService.eliminarCurso(id)
    this.obtenerCursos()
  }

  
  mostrarDetalles(curso: any) {
    curso.mostrarDetalles = !curso.mostrarDetalles
  }

}
