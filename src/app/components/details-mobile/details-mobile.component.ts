import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {PhoneService} from "../../service/phone.service";
import {Phone} from "../../model/Phone";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-details-mobile',
  standalone: true,
  imports: [AsyncPipe, NgForOf, RouterLink, NgIf],
  template: `
    <section *ngIf="phone" id="containerPhone">
      <h2>Phone Details</h2>
      <div class="phone">
        <h3>{{ phone.name }}</h3>
        <img [src]="phone.url">
        <p>{{ phone.description }}</p>
        <p>{{ phone.price }} €</p>
        <p><a routerLink="/provider/{{ phone.provider }}">{{ phone.provider }}</a></p>
        <button type="button" (click)="addCart()">Buy</button>
      </div>
    </section>
  `,
  styleUrl: './details-mobile.component.css'
})
export class DetailsMobileComponent implements OnInit {

  phone: Phone | undefined;

  constructor(private phoneService: PhoneService, private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit() {

    const route = this.route.snapshot.paramMap;
    const phoneID = Number(route.get('phoneId'));

    this.phoneService.getPhoneId(phoneID).subscribe(phone => {
      this.phone = phone;
    })
  }

  addCart() {
    if (this.phone) {
      this.cartService.addToCart(this.phone);
    }
  }

}
