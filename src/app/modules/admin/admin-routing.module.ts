import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GeneralComponent } from './pages/listas/general/general.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },

  //TODO: Lista General
  {
    path: 'lista',
    component: GeneralComponent,
    title: 'Lista de dispositivos',
  },

  //TODO: Rutas la por AREA Bodega
  {
    path: 'bodega/lista',
    component: GeneralComponent,
    title: 'Bodega Lista de dispositivos',
  },
  {
    path: 'bodega/activos',
    component: GeneralComponent,
    title: 'Bodega dispositivos activos',
  },
  {
    path: 'bodega/inactivos',
    component: GeneralComponent,
    title: 'Bodega dispositivos inactivos',
  },
  {
    path: 'bodega/mantenimiento',
    component: GeneralComponent,
    title: 'Bodega dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Compras
  {
    path: 'compras/lista',
    component: GeneralComponent,
    title: 'Compras Lista de dispositivos',
  },
  {
    path: 'compras/activos',
    component: GeneralComponent,
    title: 'Compras dispositivos activos',
  },
  {
    path: 'compras/inactivos',
    component: GeneralComponent,
    title: 'Compras dispositivos inactivos',
  },
  {
    path: 'compras/mantenimiento',
    component: GeneralComponent,
    title: 'Compras dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Recursos humanos
  {
    path: 'recursoshumanos/lista',
    component: GeneralComponent,
    title: 'Recursos humanos Lista de dispositivos',
  },
  {
    path: 'recursoshumanos/activos',
    component: GeneralComponent,
    title: 'Recursos humanos dispositivos activos',
  },
  {
    path: 'recursoshumanos/inactivos',
    component: GeneralComponent,
    title: 'Recursos humanos dispositivos inactivos',
  },
  {
    path: 'recursoshumanos/mantenimiento',
    component: GeneralComponent,
    title: 'Recursos humanos dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA tesoreria
  {
    path: 'tesoreria/lista',
    component: GeneralComponent,
    title: 'Tesoreria Lista de dispositivos',
  },
  {
    path: 'tesoreria/activos',
    component: GeneralComponent,
    title: 'Tesoreria dispositivos activos',
  },
  {
    path: 'tesoreria/inactivos',
    component: GeneralComponent,
    title: 'Tesoreria dispositivos inactivos',
  },
  {
    path: 'tesoreria/mantenimiento',
    component: GeneralComponent,
    title: 'Tesoreria dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Ventas
  {
    path: 'ventas/lista',
    component: GeneralComponent,
    title: 'Ventas Lista de dispositivos',
  },
  {
    path: 'ventas/activos',
    component: GeneralComponent,
    title: 'Ventas dispositivos activos',
  },
  {
    path: 'ventas/inactivos',
    component: GeneralComponent,
    title: 'Ventas dispositivos inactivos',
  },
  {
    path: 'ventas/mantenimiento',
    component: GeneralComponent,
    title: 'Ventas dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Contabilidad
  {
    path: 'otro/lista',
    component: GeneralComponent,
    title: 'Otros Lista de dispositivos',
  },
  {
    path: 'otro/activos',
    component: GeneralComponent,
    title: 'Otros dispositivos activos',
  },
  {
    path: 'otro/inactivos',
    component: GeneralComponent,
    title: 'Otros dispositivos inactivos',
  },
  {
    path: 'otro/mantenimiento',
    component: GeneralComponent,
    title: 'Otros dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Contabilidad
  {
    path: 'contabilidad/lista',
    component: GeneralComponent,
    title: 'Contabilidad Lista de dispositivos',
  },
  {
    path: 'contabilidad/activos',
    component: GeneralComponent,
    title: 'Contabilidad dispositivos activos',
  },
  {
    path: 'contabilidad/inactivos',
    component: GeneralComponent,
    title: 'Contabilidad dispositivos inactivos',
  },
  {
    path: 'contabilidad/mantenimiento',
    component: GeneralComponent,
    title: 'Contabilidad dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Sistemas
  {
    path: 'sistemas/lista',
    component: GeneralComponent,
    title: 'Sistemas Lista de dispositivos',
  },
  {
    path: 'sistemas/activos',
    component: GeneralComponent,
    title: 'Sistemas dispositivos activos',
  },
  {
    path: 'sistemas/inactivos',
    component: GeneralComponent,
    title: 'Sistemas dispositivos inactivos',
  },
  {
    path: 'sistemas/mantenimiento',
    component: GeneralComponent,
    title: 'Sistemas dispositivos mantenimiento',
  },

  //TODO: Rutas la por AREA Inventario
  {
    path: 'inventario/lista',
    component: GeneralComponent,
    title: 'Inventario Lista de dispositivos',
  },
  {
    path: 'inventario/activos',
    component: GeneralComponent,
    title: 'Inventario dispositivos activos',
  },
  {
    path: 'inventario/inactivos',
    component: GeneralComponent,
    title: 'Inventario dispositivos inactivos',
  },
  {
    path: 'inventario/mantenimiento',
    component: GeneralComponent,
    title: 'Inventario dispositivos mantenimiento',
  },

  //TODO: Rutas la Calima
  {
    path: 'calima/lista',
    component: GeneralComponent,
    title: 'Calima Lista de dispositivos',
  },
  {
    path: 'calima/activos',
    component: GeneralComponent,
    title: 'Calima dispositivos activos',
  },
  {
    path: 'calima/inactivos',
    component: GeneralComponent,
    title: 'Calima dispositivos inactivos',
  },
  {
    path: 'calima/mantenimiento',
    component: GeneralComponent,
    title: 'Calima dispositivos mantenimiento',
  },

  //TODO: Rutas Avenida Sexta
  {
    path: 'avenidasexta/lista',
    component: GeneralComponent,
    title: 'Avenidasexta Lista de dispositivos',
  },
  {
    path: 'avenidasexta/activos',
    component: GeneralComponent,
    title: 'Avenidasexta dispositivos activos',
  },
  {
    path: 'avenidasexta/inactivos',
    component: GeneralComponent,
    title: 'Avenidasexta dispositivos inactivos',
  },
  {
    path: 'avenidasexta/mantenimiento',
    component: GeneralComponent,
    title: 'Avenidasexta dispositivos mantenimiento',
  },

  //TODO: Rutas Cedi
  {
    path: 'cedi/lista',
    component: GeneralComponent,
    title: 'Cedi Lista de dispositivos',
  },
  {
    path: 'cedi/activos',
    component: GeneralComponent,
    title: 'Cedi dispositivos activos',
  },
  {
    path: 'cedi/inactivos',
    component: GeneralComponent,
    title: 'Cedi dispositivos inactivos',
  },
  {
    path: 'cedi/mantenimiento',
    component: GeneralComponent,
    title: 'Cedi dispositivos mantenimiento',
  },

  //TODO: Rutas Centro
  {
    path: 'centro/lista',
    component: GeneralComponent,
    title: 'Centro Lista de dispositivos',
  },
  {
    path: 'centro/activos',
    component: GeneralComponent,
    title: 'Centro dispositivos activos',
  },
  {
    path: 'centro/inactivos',
    component: GeneralComponent,
    title: 'Centro dispositivos inactivos',
  },
  {
    path: 'centro/mantenimiento',
    component: GeneralComponent,
    title: 'Centro dispositivos mantenimiento',
  },

  //TODO: Rutas Cosmocentro
  {
    path: 'cosmocentro/lista',
    component: GeneralComponent,
    title: 'Cosmocentro Lista de dispositivos',
  },
  {
    path: 'cosmocentro/activos',
    component: GeneralComponent,
    title: 'Cosmocentro dispositivos activos',
  },
  {
    path: 'cosmocentro/inactivos',
    component: GeneralComponent,
    title: 'Cosmocentro dispositivos inactivos',
  },
  {
    path: 'cosmocentro/mantenimiento',
    component: GeneralComponent,
    title: 'Cosmocentro dispositivos mantenimiento',
  },

  //TODO: Rutas Pasoancho
  {
    path: 'pasoancho/lista',
    component: GeneralComponent,
    title: 'Pasoancho Lista de dispositivos',
  },
  {
    path: 'pasoancho/activos',
    component: GeneralComponent,
    title: 'Pasoancho dispositivos activos',
  },
  {
    path: 'pasoancho/inactivos',
    component: GeneralComponent,
    title: 'Pasoancho dispositivos inactivos',
  },
  {
    path: 'pasoancho/mantenimiento',
    component: GeneralComponent,
    title: 'Pasoancho dispositivos mantenimiento',
  },

  {
    path: 'create',
    component: FormsComponent,
  },
  {
    path: 'update/:id',
    component: FormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
