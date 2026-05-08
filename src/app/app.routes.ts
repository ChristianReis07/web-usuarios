import { Routes } from '@angular/router';
import { Login } from './login/login';

export const routes: Routes = [
  {
    path: 'pages/login', //rota de navegação
    component: Login,
  },
  {
    path: '',
    pathMatch: 'full', //rota padrão (raiz) do projeto
    redirectTo: '/pages/login', //redirecionamento
  },
];
