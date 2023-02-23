import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
  {
    path: 'lista',
    component: InicioComponent,
    title: 'Lista de dispositivos',
  },

  //TODO: Rutas la 14
  {
    path: '14/lista',
    component: InicioComponent,
    title: '14 Lista de dispositivos',
  },
  {
    path: '14/activos',
    component: InicioComponent,
    title: '14 dispositivos activos',
  },
  {
    path: '14/inactivos',
    component: InicioComponent,
    title: '14 dispositivos inactivos',
  },
  {
    path: '14/mantenimiento',
    component: InicioComponent,
    title: '14 dispositivos mantenimiento',
  },

  //TODO: Rutas Avenida Sexta
  {
    path: 'avenidasexta/lista',
    component: InicioComponent,
    title: 'avenidasexta Lista de dispositivos',
  },
  {
    path: 'avenidasexta/activos',
    component: InicioComponent,
    title: 'avenidasexta dispositivos activos',
  },
  {
    path: 'avenidasexta/inactivos',
    component: InicioComponent,
    title: 'avenidasexta dispositivos inactivos',
  },
  {
    path: 'avenidasexta/mantenimiento',
    component: InicioComponent,
    title: 'avenidasexta dispositivos mantenimiento',
  },

  //TODO: Rutas Cedi
  {
    path: 'cedi/lista',
    component: InicioComponent,
    title: 'cedi Lista de dispositivos',
  },
  {
    path: 'cedi/activos',
    component: InicioComponent,
    title: 'cedi dispositivos activos',
  },
  {
    path: 'cedi/inactivos',
    component: InicioComponent,
    title: 'cedi dispositivos inactivos',
  },
  {
    path: 'cedi/mantenimiento',
    component: InicioComponent,
    title: 'cedi dispositivos mantenimiento',
  },

  //TODO: Rutas Centro
  {
    path: 'centro/lista',
    component: InicioComponent,
    title: 'centro Lista de dispositivos',
  },
  {
    path: 'centro/activos',
    component: InicioComponent,
    title: 'centro dispositivos activos',
  },
  {
    path: 'centro/inactivos',
    component: InicioComponent,
    title: 'centro dispositivos inactivos',
  },
  {
    path: 'centro/mantenimiento',
    component: InicioComponent,
    title: 'centro dispositivos mantenimiento',
  },

  //TODO: Rutas Cosmocentro
  {
    path: 'cosmocentro/lista',
    component: InicioComponent,
    title: 'Cosmocentro Lista de dispositivos',
  },
  {
    path: 'cosmocentro/activos',
    component: InicioComponent,
    title: 'Cosmocentro dispositivos activos',
  },
  {
    path: 'cosmocentro/inactivos',
    component: InicioComponent,
    title: 'Cosmocentro dispositivos inactivos',
  },
  {
    path: 'cosmocentro/mantenimiento',
    component: InicioComponent,
    title: 'Cosmocentro dispositivos mantenimiento',
  },

  //TODO: Rutas Pasoancho
  {
    path: 'pasoancho/lista',
    component: InicioComponent,
    title: 'pasoancho Lista de dispositivos',
  },
  {
    path: 'pasoancho/activos',
    component: InicioComponent,
    title: 'pasoancho dispositivos activos',
  },
  {
    path: 'pasoancho/inactivos',
    component: InicioComponent,
    title: 'pasoancho dispositivos inactivos',
  },
  {
    path: 'pasoancho/mantenimiento',
    component: InicioComponent,
    title: 'pasoancho dispositivos mantenimiento',
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
