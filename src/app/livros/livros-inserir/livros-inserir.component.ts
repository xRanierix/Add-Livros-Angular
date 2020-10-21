
import { Component,EventEmitter, Output } from '@angular/core';
import { Livros } from '../livros.model';

@Component({
selector: 'app-livros-inserir',
templateUrl: './livros-inserir.component.html',
styleUrls: ['./livros-inserir.component.css'],
})
export class LivrosInserirComponent {

  @Output() LivroAdicionado = new EventEmitter<Livros>();

  id: string;
  titulo: string;
  autor: string;
  numero_de_paginas: string;


    onAdicionarLivro() {
      const livro : Livros =  {
        titulo: this.titulo,
        id: this.id,
        autor: this.autor,
        numero_de_paginas: this.numero_de_paginas,
        };
        this.LivroAdicionado.emit(livro);
      }

}
