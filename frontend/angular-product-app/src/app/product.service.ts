import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //baseUrl:string ="http://localhost:9090/product";
  baseUrl:string ="http://52.205.117.107:9090/product";
  //baseUrl:string ="http://springboot-container/product";
  constructor(public http:HttpClient) { }

  findAllProdut():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+"/findAll");
  }

  storeProduct(product:Product):Observable<string> {
    return this.http.post(this.baseUrl+"/store",product,{responseType:'text'});
  }
}
