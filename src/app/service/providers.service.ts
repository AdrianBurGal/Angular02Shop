import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Provider} from "../model/Provider";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  constructor(private http: HttpClient) { }

  getListProviders(): Observable<Provider[]>{
    return this.http.get<Provider[]>(`assets/providers.json`);
  }

  getProviderName(name: string): Observable<Provider | undefined> {
    return this.getListProviders().pipe(
      map(providers => providers.find(provider => provider.name === name))
    );
  }

}
