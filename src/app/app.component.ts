import { Component } from '@angular/core';
import { Livros } from './livros/livros.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  livros: Livros[] = [];

  title = 'Aula03';
  //livros = [];

  onLivroAdicionado(livro) {
    this.livros = [...this.livros, livro];
    }
}
