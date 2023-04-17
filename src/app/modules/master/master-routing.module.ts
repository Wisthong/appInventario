import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionUserComponent } from './pages/gestion-user/gestion-user.component';
import { RegisterComponent } from '@home/pages/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'gestion',
        component: GestionUserComponent,
        title: 'Gestion de Usuarios',
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Registro de usuario',
      },
      {
        path: 'update/:id',
        component: RegisterComponent,
        title: 'Actualizar usuario',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
