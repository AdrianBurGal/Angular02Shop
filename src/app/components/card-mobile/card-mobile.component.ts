import {Component, Input, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Phone} from "../../model/Phone";

@Component({
  selector: 'app-card-mobile',
  standalone: true,
  imports: [NgForOf, AsyncPipe, RouterLink, NgIf],
  template: `
      <div class="phone">
          <h3><a routerLink="/phone/{{ phone.id }}">{{ phone.name }}</a></h3>
          <img [src]="phone.url">
          <p>{{ phone.description }}</p>
          <p><b>{{ phone.price }} €</b></p>
          <span *ngIf="phone.bought">Bought</span>
      </div>
  `,
  styleUrl: './card-mobile.component.css'
})
export class CardMobileComponent {
  @Input() phone!: Phone;
}
