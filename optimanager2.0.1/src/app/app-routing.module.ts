import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToList = () => redirectLoggedInTo(['list-clientes']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-clientes',
    pathMatch: 'full'
  },

  {
    path: 'list-clientes',
    loadChildren: () => import('./pages/list-clientes/list-clientes.module').then( m => m.ListClientesPageModule), canActivate: [AuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'crear-cliente',
    loadChildren: () => import('./pages/form-clientes/form-clientes.module').then( m => m.FormClientesPageModule), canActivate: [AuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}
  },

  {
    path: 'editar-cliente/:id',
    loadChildren: () => import('./pages/form-clientes/form-clientes.module').then( m => m.FormClientesPageModule), canActivate: [AuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule), canActivate: [AuthGuard], data: {authGuardPipe: redirectLoggedInToList}
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
