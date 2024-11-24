import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: any[] = []

  constructor() { 
    this.cargarCursos()
    this.cargarCursosIniciales()
  }


  async guardarCurso(nombreCurso:string, nombreInstructor:string, fechaInicio:string, duracion:number, descripcion:string) {
      let data = await this.obtenerFoto(nombreCurso)
    const curso = {
      id: this.generarId(),
      nombreCurso: nombreCurso,
      nombreInstructor: nombreInstructor,
      fotoCurso: data,
      fechaInicio: fechaInicio,
      duracion: duracion,
      descripcion: descripcion
    }

    let cursos = JSON.parse(localStorage.getItem('cursos') || '[]')
    cursos.push(curso)
    localStorage.setItem('cursos', JSON.stringify(cursos))

  }
  generarId(): number {
    const cursos = JSON.parse(localStorage.getItem('cursos') || '[]')
    const maxId = cursos.length > 0 ? Math.max(...cursos.map((curso: any) => curso.id)) : 0
    return maxId + 1
  }
  

  cargarCursos() {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos') || '[]')
    return this.cursos = cursosGuardados
  }

  eliminarCurso(id: number) {
    this.cursos = this.cursos.filter(curso => curso.id !== id)
    localStorage.setItem('cursos', JSON.stringify(this.cursos))
  }


  obtenerFoto(nombreCurso: string) {
    return `https://ui-avatars.com/api/?name=${nombreCurso}&background=44444&color=FFFFFF&size=128`
  }
  

    async cargarCursosIniciales() {
      const cursos = JSON.parse(localStorage.getItem('cursos') || '[]')
      
      if (!cursos.some((curso: any) => curso.id === 1)) {
        await this.guardarCurso(
          'Cálculo Diferencial',
          'Instructor 1',
          '2025-01-01',
          8,
          'Descripción del curso de Matemáticas Aplicadas'
        )
      }
  
      if (!cursos.some((curso: any) => curso.id === 2)) {
        await this.guardarCurso(
          'Geometría Analítica',
          'Instructor 2',
          '2025-02-01',
          6,
          'Descripción del curso de Geometría Analítica'
        )
      }
    }


}
