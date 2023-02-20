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
    path: 'listageneral',
    component: GeneralComponent,
    title: 'Lista de dispositivos',
  },
  {
    path: 'listadispactivos',
    component: GeneralComponent,
    title: 'Dispositivos activos',
  },
  {
    path: 'listadispinactivos',
    component: GeneralComponent,
    title: 'Dispositivos inactivos',
  },
  {
    path: 'listadispmant',
    component: GeneralComponent,
    title: 'Dispositivos en mantenimiento',
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
