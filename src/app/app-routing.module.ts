import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('@home/home.module').then((m) => m.HomeModule),
    title: 'Inventario App',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@admin/admin.module').then((m) => m.AdminModule),
    title: 'Administador',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
