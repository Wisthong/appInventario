import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/guards/auth.guard';
import { NotfoundComponent } from './Pages/notfound/notfound.component';

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
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Recurso no accesible',
  },
];
// { preloadingStrategy: PreloadAllModules }
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
