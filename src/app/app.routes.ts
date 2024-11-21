import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { AgregarCursoComponent } from './pages/agregar-curso/agregar-curso.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'pages/home',
        pathMatch: 'full'
    },
    {
        path:'pages/home',
        component: HomeComponent
    },
    {
        path: 'pages/cursos',
        component: CursosComponent
    },
    {
        path: 'pages/agregar-curso',
        component: AgregarCursoComponent
    },
    {
        path: 'pages/contacto',
        component: ContactoComponent
    }
    
];
