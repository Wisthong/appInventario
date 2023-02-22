import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch:'full'
  },
  {
    path: 'lista',
    component: InicioComponent,
    title: 'Lista de dispositivos',
  },
  {
    path: 'activos',
    component: InicioComponent,
    title: 'Lista de dispositivos activos',
  },
  {
    path: 'inactivos',
    component: InicioComponent,
    title: 'Lista de dispositivos inactivos',
  },
  {
    path: 'mant',
    component: InicioComponent,
    title: 'Lista de dispositivos en mantenimiento',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Inicio de sesion',
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
