import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  //Atributos
  nomeUsuario = signal<string>('');
  emailUsuario = signal<string>('');

  //Inicializando o Router
  router = inject(Router);

  //Função reservada que é executada quando
  //o componente é inicializada
  ngOnInit() {
    //Ler os dados do usuário que estão salvos na sessão do mavegador
    const data = JSON.parse(sessionStorage.getItem('usuario') as string);
    //Capturar o nome e o email do usuário autenticado
    this.nomeUsuario.set(data.usuario.nome);
    this.emailUsuario.set(data.usuario.email);
  }

  //Função para realizar o logout do usuário
  logout() {
    //Apagar os dados do usuário salvos na sessão do navegador
    sessionStorage.removeItem('usuario');
    //Redirecionar para a página de login
    this.router.navigate(['/pages/login']);
  }

}
