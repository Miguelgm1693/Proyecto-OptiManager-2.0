import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-clientes',
    pathMatch: 'full'
  },

  {
    path: 'list-clientes',
    loadChildren: () => import('./pages/list-clientes/list-clientes.module').then( m => m.ListClientesPageModule)
  },
  {
    path: 'crear-cliente',
    loadChildren: () => import('./pages/form-clientes/form-clientes.module').then( m => m.FormClientesPageModule)
  },

  {
    path: 'editar-cliente/:id',
    loadChildren: () => import('./pages/form-clientes/form-clientes.module').then( m => m.FormClientesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
