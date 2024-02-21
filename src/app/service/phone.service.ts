import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Phone} from "../model/Phone";
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  phones: Observable<Phone[]>;

  constructor(private http: HttpClient) {
    this.phones = this.http.get<Phone[]>(`assets/phones.json`);
  }

  getListPhones(): Observable<Phone[]> {
    return this.phones;
  }

  getPhoneId(id: number): Observable<Phone | undefined> {
    return this.getListPhones().pipe(
      map(phones => phones.find(phone => phone.id === id))
    );
  }

  isBought(phonesBought: Phone[]) {
    this.phones.subscribe(phones => {
      phones.forEach(phone => {
        phonesBought.forEach(phoneBought => {
          if (phone.id === phoneBought.id) {
            phones[phone.id - 1].bought = true;
          }
        })
      })
      this.phones = of(phones);
    })
  }
}
