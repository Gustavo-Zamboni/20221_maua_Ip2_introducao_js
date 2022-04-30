import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome: string;

  alterarNome(event){
    console.log(event.target.value)
    this.nome = event.target.value;
  }

  // nome = "Ana"
  // idade = 17

  adicionar(): void{
    console.log("Adicionando...")
  }

  // lancarDado(){
  //   return Math.floor(Math.random() * 6) + 1;
  // }
}
