import { Routes } from '@angular/router';
import { Login } from './login/login';
import { CriarUsuario } from './criar-usuario/criar-usuario';

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
];
