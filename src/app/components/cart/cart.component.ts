import {Component} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {NgForOf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

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

  items = this.cartService.getItems();

  checkoutForm =
    this.formBuilder.group({
      name: '', address: ''
    });

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    //console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
