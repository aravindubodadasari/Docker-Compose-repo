import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //baseUrl:string ="http://localhost:8080/product";
  baseUrl:string ="http://3.81.201.237:9090/product";
  constructor(public http:HttpClient) { }

  findAllProdut():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+"/findAll");
  }

  storeProduct(product:Product):Observable<string> {
    return this.http.post(this.baseUrl+"/store",product,{responseType:'text'});
  }
}
