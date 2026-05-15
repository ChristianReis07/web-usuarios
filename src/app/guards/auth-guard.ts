import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  //Inicializando o Router
  const router = inject(Router);

  //Capturar os dados do usuário na sessão
  const data = sessionStorage.getItem('usuario');

  //Vwerificar se existe um usuário na sessão
  if(data) {
    return true; //permitir o acesso à rota
  }
  else {
    //redirecionar de volta para a rota de login
    return router.parseUrl('/pages/login');
  }  
};
