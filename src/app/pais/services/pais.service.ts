import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, RESTAboutResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string ='https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

buscarPais(termino: string):  Observable <Country[]>
 {

  const url =`${this.apiUrl}/name/${termino}`;
  return this.http.get<Country[]>(url);

}

buscarCapital(termino: string): Observable <Country[]>{
  const url =`${this.apiUrl}/capital/${termino}`;
  return this.http.get<Country[]>(url);


}

getPaisPorAlpha(id: string): Observable <Country>{
  const url =`${this.apiUrl}/alpha/${id}`;
  return this.http.get<Country>(url);


}

getPaisPorRegion(codBloc: string): Observable <Country[]>{
  const url =`${this.apiUrl}/regionalbloc/${codBloc}`;
  return this.http.get<Country[]>(url);


}

/* aboute(): Observable <RESTAboutResponse>{
  const urlAbout: string= 'http://back-test.bymiashop.com/api/v1/about_uses/1';
  return this.http.get<RESTAboutResponse>(urlAbout);
} */

}
