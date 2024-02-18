import {Injectable} from "@angular/core";
import {Phone} from "../model/Phone";


@Injectable({
  providedIn: 'root',
})
export class CartService {

  listPhones: Phone[] = [];

  addToCart(product: Phone) {
    this.listPhones.push(product);
    window.alert('Your product has been added to the cart!');
  }

  getItems() {
    return this.listPhones;
  }

  clearCart() {
    this.listPhones = [];
    return this.listPhones;
  }
}
