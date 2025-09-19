import { Component, inject } from '@angular/core';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { MoedaPipe } from '../moeda-pipe';
import { FormsModule } from '@angular/forms';
import { FiltroPesquisaPipe } from '../filtro-pesquisa-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabela-produtos',
  imports: [FormsModule, MoedaPipe, UpperCasePipe, DatePipe, FiltroPesquisaPipe, RouterLink],
  templateUrl: './tabela-produtos.html',
  styleUrl: './tabela-produtos.css'
})
export class TabelaProdutos {
  listaProdutos: Produto[] = [];
  nomePesquisa = "";
  private produtoService = inject(ProdutoService);

  constructor() {
    this.listaProdutos = this.produtoService.listar();
  }

  deletar(id?:number) {
    this.produtoService.deletar(id);
  }

}
