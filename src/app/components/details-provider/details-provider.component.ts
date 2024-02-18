import {Component, OnInit} from '@angular/core';
import {ProvidersService} from "../../service/providers.service";
import {ActivatedRoute} from "@angular/router";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Provider} from "../../model/Provider";
import {Phone} from "../../model/Phone";
import {PhoneService} from "../../service/phone.service";
import {CardMobileComponent} from "../card-mobile/card-mobile.component";

@Component({
  selector: 'app-details-provider',
  standalone: true,
  imports: [NgIf, NgForOf, CardMobileComponent, AsyncPipe],
  template: `
      <section *ngIf="provider" id="containerProvider">
          <h2>Provider Details</h2>
          <div class="provider">
              <h3><a href="{{ provider.website }}">{{ provider.name }}</a></h3>
              <p>{{ provider.country }}</p>
              <h4>Products:</h4>
              <div *ngFor="let phone of phones">
                  <app-card-mobile [phone]="phone"></app-card-mobile>
              </div>
          </div>
      </section>
  `,
  styleUrl: './details-provider.component.css'
})
export class DetailsProviderComponent implements OnInit {

  provider: Provider | undefined;
  phones: Phone[] = [];

  constructor(
    private providerService: ProvidersService,
    private route: ActivatedRoute,
    private phoneService: PhoneService
  ) {
  }

  ngOnInit(): void {
    const route = this.route.snapshot.paramMap;
    const providerName = String(route.get('providerName'));

    this.providerService.getProviderName(providerName).subscribe(provider => {
      this.provider = provider;

      if (provider) {
        provider.products.forEach(productId => {
          this.phoneService.getPhoneId(productId).subscribe(phone => {
            if (phone) {
              this.phones.push(phone);
            }
          });
        });
      }

    });
  }
}
