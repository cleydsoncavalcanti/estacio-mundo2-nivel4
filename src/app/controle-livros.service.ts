import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, título: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor 1', 'Autor 2'] },
    { codigo: 2, codEditora: 2, título: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor 3', 'Autor 4'] },
    { codigo: 3, codEditora: 3, título: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor 5', 'Autor 6'] }
  ];

  // Implemente o método obterLivros com o retorno do vetor livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // Implemente o método incluir, recebendo um objeto do tipo Livro,
  // que terá o código trocado pelo código mais alto do vetor, incrementado de um,
  // e depois será adicionado ao vetor
  incluir(livro: Livro): void {
    const novoCodigo = this.livros.reduce((max, l) => (l.codigo > max ? l.codigo : max), 0) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  // Implemente o método excluir, recebendo um código numérico,
  // que irá encontrar o índice do livro com o código fornecido, através de findIndex,
  // e removê-lo com o uso de splice
  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}