import {Component, inject} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {NgForOf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {JavaScriptOptimizerPlugin} from "@angular-devkit/build-angular/src/tools/webpack/plugins";
import {PhoneService} from "../../service/phone.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgForOf, ReactiveFormsModule],
  template: `
    <section id="containerCart">
      <h3>Cart</h3>
      <div class="cart-item" *ngFor="let item of items">
        <span>{{ item.name }}</span>
        <span>{{ item.price }}€</span>
      </div>

      <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
        <div>
          <label for="name">Name</label>
          <input id="name" type="text" formControlName="name">
        </div>
        <div>
          <label for="address">Address</label>
          <input id="address" type="text" formControlName="address">
        </div>
        <button class="button" type="submit">Purchase</button>
      </form>
    </section>
  `,
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartService = inject(CartService);
  phoneService = inject(PhoneService);
  items = this.cartService.getItems();
  itemsBought = JSON.parse(localStorage.getItem('itemsBought') || '{}');

  checkoutForm =
    this.formBuilder.group({
      name: '', address: ''
    });

  constructor(private formBuilder: FormBuilder) {
    this.phoneService.isBought(this.itemsBought);
  }

  onSubmit(): void {
    this.phoneService.isBought(this.itemsBought);
    localStorage.setItem('itemsBought', JSON.stringify(this.items));
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
