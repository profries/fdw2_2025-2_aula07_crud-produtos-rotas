import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-form-produtos',
  imports: [FormsModule, JsonPipe],
  templateUrl: './form-produtos.html',
  styleUrl: './form-produtos.css'
})
export class FormProdutos {
  produto = new Produto();
  produtoService = inject(ProdutoService);

  cadastrarProduto(){ 
    this.produtoService.inserir(this.produto);
    alert("Produto cadastrado com sucesso!")
    this.produto = new Produto();
  }

}
