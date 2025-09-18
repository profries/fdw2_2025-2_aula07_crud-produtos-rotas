import { Component, signal } from '@angular/core';
import { TabelaProdutos } from "./tabela-produtos/tabela-produtos";
import { FormProdutos } from "./form-produtos/form-produtos";
import { ListCardProdutos } from "./list-card-produtos/list-card-produtos";

@Component({
  selector: 'app-root',
  imports: [TabelaProdutos, FormProdutos, ListCardProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
