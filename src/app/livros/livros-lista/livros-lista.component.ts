import { Component, OnInit, Input } from '@angular/core';
import { Livros } from '../livros.model';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit {

  @Input() livros: Livros[] = [];

  /*livros = [
    {
      id: '01',
      titulo: 'O auto da Compadecida',
      autor: 'Ariano Suassuna',
      numero_de_paginas: '361',
    },
    {
      id: '02',
      titulo: 'Biblia',
      autor: 'Deus',
      numero_de_paginas: '548',
    },
    ];
    */

    @Input() clientes = [];

  constructor() { }

  ngOnInit(): void {
  }

}
