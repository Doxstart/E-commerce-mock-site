import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly BASE_URL = "https://fakestoreapi.com/products";

  public search = new BehaviorSubject<string>("");

  public filter = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products[]>{
    return this.http.get<any>(this.BASE_URL)
    .pipe(
      map((data: any) => data)
    );
  }

}
