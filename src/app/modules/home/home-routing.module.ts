import { ViewGetComponent } from './pages/view-get/view-get.component';
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
  // {
  //   path: 'view',
  //   component: ViewGetComponent,
  //   title: 'Detalles de dispositivo',
  // },
  {
    path: 'view/:id',
    component: ViewGetComponent,
    title: 'Detalles de dispositivo',
  },
  //TODO: Rutas la por AREA Bodega
  {
    path: 'bodega/lista',
    component: InicioComponent,
    title: 'Bodega Lista de dispositivos',
  },
  {
    path: 'bodega/activos',
    component: InicioComponent,
    title: 'Bodega dispositivos activos',
  },
  {
    path: 'bodega/inactivos',
    component: InicioComponent,
    title: 'Bodega dispositivos inactivos',
  },
  {
    path: 'bodega/mantenimiento',
    component: InicioComponent,
    title: 'Bodega dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Compras
  {
    path: 'compras/lista',
    component: InicioComponent,
    title: 'Compras Lista de dispositivos',
  },
  {
    path: 'compras/activos',
    component: InicioComponent,
    title: 'Compras dispositivos activos',
  },
  {
    path: 'compras/inactivos',
    component: InicioComponent,
    title: 'Compras dispositivos inactivos',
  },
  {
    path: 'compras/mantenimiento',
    component: InicioComponent,
    title: 'Compras dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Recursos humanos
  {
    path: 'recursoshumanos/lista',
    component: InicioComponent,
    title: 'Recursos humanos Lista de dispositivos',
  },
  {
    path: 'recursoshumanos/activos',
    component: InicioComponent,
    title: 'Recursos humanos dispositivos activos',
  },
  {
    path: 'recursoshumanos/inactivos',
    component: InicioComponent,
    title: 'Recursos humanos dispositivos inactivos',
  },
  {
    path: 'recursoshumanos/mantenimiento',
    component: InicioComponent,
    title: 'Recursos humanos dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA tesoreria
  {
    path: 'tesoreria/lista',
    component: InicioComponent,
    title: 'Tesoreria Lista de dispositivos',
  },
  {
    path: 'tesoreria/activos',
    component: InicioComponent,
    title: 'Tesoreria dispositivos activos',
  },
  {
    path: 'tesoreria/inactivos',
    component: InicioComponent,
    title: 'Tesoreria dispositivos inactivos',
  },
  {
    path: 'tesoreria/mantenimiento',
    component: InicioComponent,
    title: 'Tesoreria dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Ventas
  {
    path: 'ventas/lista',
    component: InicioComponent,
    title: 'Ventas Lista de dispositivos',
  },
  {
    path: 'ventas/activos',
    component: InicioComponent,
    title: 'Ventas dispositivos activos',
  },
  {
    path: 'ventas/inactivos',
    component: InicioComponent,
    title: 'Ventas dispositivos inactivos',
  },
  {
    path: 'ventas/mantenimiento',
    component: InicioComponent,
    title: 'Ventas dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Contabilidad
  {
    path: 'otro/lista',
    component: InicioComponent,
    title: 'Otros Lista de dispositivos',
  },
  {
    path: 'otro/activos',
    component: InicioComponent,
    title: 'Otros dispositivos activos',
  },
  {
    path: 'otro/inactivos',
    component: InicioComponent,
    title: 'Otros dispositivos inactivos',
  },
  {
    path: 'otro/mantenimiento',
    component: InicioComponent,
    title: 'Otros dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Contabilidad
  {
    path: 'contabilidad/lista',
    component: InicioComponent,
    title: 'Contabilidad Lista de dispositivos',
  },
  {
    path: 'contabilidad/activos',
    component: InicioComponent,
    title: 'Contabilidad dispositivos activos',
  },
  {
    path: 'contabilidad/inactivos',
    component: InicioComponent,
    title: 'Contabilidad dispositivos inactivos',
  },
  {
    path: 'contabilidad/mantenimiento',
    component: InicioComponent,
    title: 'Contabilidad dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Sistemas
  {
    path: 'sistemas/lista',
    component: InicioComponent,
    title: 'Sistemas Lista de dispositivos',
  },
  {
    path: 'sistemas/activos',
    component: InicioComponent,
    title: 'Sistemas dispositivos activos',
  },
  {
    path: 'sistemas/inactivos',
    component: InicioComponent,
    title: 'Sistemas dispositivos inactivos',
  },
  {
    path: 'sistemas/mantenimiento',
    component: InicioComponent,
    title: 'Sistemas dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Inventario
  {
    path: 'inventario/lista',
    component: InicioComponent,
    title: 'Inventario Lista de dispositivos',
  },
  {
    path: 'inventario/activos',
    component: InicioComponent,
    title: 'Inventario dispositivos activos',
  },
  {
    path: 'inventario/inactivos',
    component: InicioComponent,
    title: 'Inventario dispositivos inactivos',
  },
  {
    path: 'inventario/mantenimiento',
    component: InicioComponent,
    title: 'Inventario dispositivos mantenimiento',
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
