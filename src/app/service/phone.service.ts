import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Phone} from "../model/Phone";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  constructor(private http: HttpClient) {}

  getListPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(`assets/phones.json`);
  }

  getPhoneId(id: number): Observable<Phone | undefined> {
    return this.getListPhones().pipe(
      map(phones => phones.find(phone => phone.id === id))
    );
  }

}
