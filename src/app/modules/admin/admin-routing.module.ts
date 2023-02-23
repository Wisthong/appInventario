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

  {
    path: 'lista',
    component: GeneralComponent,
    title: 'Lista de dispositivos',
  },

  //TODO: Rutas la 14
  {
    path: '14/lista',
    component: GeneralComponent,
    title: '14 Lista de dispositivos',
  },
  {
    path: '14/activos',
    component: GeneralComponent,
    title: '14 dispositivos activos',
  },
  {
    path: '14/inactivos',
    component: GeneralComponent,
    title: '14 dispositivos inactivos',
  },
  {
    path: '14/mantenimiento',
    component: GeneralComponent,
    title: '14 dispositivos mantenimiento',
  },

  //TODO: Rutas Avenida Sexta
  {
    path: 'avenidasexta/lista',
    component: GeneralComponent,
    title: 'avenidasexta Lista de dispositivos',
  },
  {
    path: 'avenidasexta/activos',
    component: GeneralComponent,
    title: 'avenidasexta dispositivos activos',
  },
  {
    path: 'avenidasexta/inactivos',
    component: GeneralComponent,
    title: 'avenidasexta dispositivos inactivos',
  },
  {
    path: 'avenidasexta/mantenimiento',
    component: GeneralComponent,
    title: 'avenidasexta dispositivos mantenimiento',
  },

  //TODO: Rutas Cedi
  {
    path: 'cedi/lista',
    component: GeneralComponent,
    title: 'cedi Lista de dispositivos',
  },
  {
    path: 'cedi/activos',
    component: GeneralComponent,
    title: 'cedi dispositivos activos',
  },
  {
    path: 'cedi/inactivos',
    component: GeneralComponent,
    title: 'cedi dispositivos inactivos',
  },
  {
    path: 'cedi/mantenimiento',
    component: GeneralComponent,
    title: 'cedi dispositivos mantenimiento',
  },

  //TODO: Rutas Centro
  {
    path: 'centro/lista',
    component: GeneralComponent,
    title: 'centro Lista de dispositivos',
  },
  {
    path: 'centro/activos',
    component: GeneralComponent,
    title: 'centro dispositivos activos',
  },
  {
    path: 'centro/inactivos',
    component: GeneralComponent,
    title: 'centro dispositivos inactivos',
  },
  {
    path: 'centro/mantenimiento',
    component: GeneralComponent,
    title: 'centro dispositivos mantenimiento',
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
    title: 'pasoancho Lista de dispositivos',
  },
  {
    path: 'pasoancho/activos',
    component: GeneralComponent,
    title: 'pasoancho dispositivos activos',
  },
  {
    path: 'pasoancho/inactivos',
    component: GeneralComponent,
    title: 'pasoancho dispositivos inactivos',
  },
  {
    path: 'pasoancho/mantenimiento',
    component: GeneralComponent,
    title: 'pasoancho dispositivos mantenimiento',
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
