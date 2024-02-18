import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
      <a routerLink='/'>
          <h1>My Store</h1>
      </a>
      <a routerLink="/cart" class="button fancy-button"><em class="material-icons">shopping_cart</em></a>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
