import {Routes} from '@angular/router';
import {DetailsMobileComponent} from "./components/details-mobile/details-mobile.component";
import {DetailsProviderComponent} from "./components/details-provider/details-provider.component";
import {ListMobileComponent} from "./components/list-mobile/list-mobile.component";
import {CartComponent} from "./components/cart/cart.component";

export const routes: Routes = [
  {
    path: '',
    component: ListMobileComponent,
    title: 'Home page'
  },
  {
    path: 'phone/:phoneId',
    component: DetailsMobileComponent,
    title: 'Details Mobile'
  },
  {
    path: 'provider/:providerName',
    component: DetailsProviderComponent,
    title: 'Details Provider'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Details Cart'
  }
];
