import { Component } from '@angular/core';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-list-card-produtos',
  imports: [CardProduto],
  templateUrl: './list-card-produtos.html',
  styleUrl: './list-card-produtos.css'
})
export class ListCardProdutos {
  listaProdutos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {
    this.listaProdutos = this.produtoService.listar();
  }

}
