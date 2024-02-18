import {Component, inject, OnInit} from '@angular/core';
import {CardMobileComponent} from "../card-mobile/card-mobile.component";
import {Phone} from "../../model/Phone";
import {PhoneService} from "../../service/phone.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list-mobile',
  standalone: true,
  imports: [CardMobileComponent, NgForOf],
  template: `
    <section id="mainPhones">
      <h2>Phones</h2>
      <section id="containerPhones">
        <app-card-mobile *ngFor="let phone of phoneList"
                         [phone]="phone">
        </app-card-mobile>
      </section>
    </section>
  `,
  styleUrl: './list-mobile.component.css'
})
export class ListMobileComponent implements OnInit {

  private phoneService = inject(PhoneService);
  phoneList!: Phone[];

  constructor() {
  }

  ngOnInit(): void {
    this.phoneService.getListPhones().subscribe(phone => {
      this.phoneList = phone;
    });
  }

}
