import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: any[] = []

  constructor() { 
    this.cargarCursos
  }

  guardarCurso(curso: any) {
    let cursos = JSON.parse(localStorage.getItem('cursos') || '[]');
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
  }

  cargarCursos() {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos') || '[]');
    return this.cursos = cursosGuardados;
    
  }

  eliminarCurso(id: number) {
    this.cursos = this.cursos.filter(curso => curso.id !== id);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
  }



}
