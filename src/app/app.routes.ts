import { Routes } from '@angular/router';
import { Login } from './login/login';
import { CriarUsuario } from './criar-usuario/criar-usuario';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
  {
    path: 'pages/login', //rota de navegação
    component: Login,
  },
  {
    path: 'pages/criar-usuario', //rota de navegação
    component: CriarUsuario,
  },
  {
    path: '',
    pathMatch: 'full', //rota padrão (raiz) do projeto
    redirectTo: '/pages/login', //redirecionamento
  },
  {
    path:'pages/dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/pages/dashboard'
  }
];
