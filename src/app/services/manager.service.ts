import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {Reserve} from '../model/reserve'
import {Product} from '../model/product';
import { Inventory } from '../model/inventory';



let API_URL = "http://localhost:8080/api/manager/";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization:'Bearer ' + this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
  }

  
  

 //products
 createProduct(product: Product): Observable<any> {
    return this.http.post(API_URL + "product-create", JSON.stringify(product),
  {headers: this.headers});
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(API_URL + "product-update", JSON.stringify(product),
  {headers: this.headers});
  }

  deleteProduct(product: Product): Observable<any> {
    return this.http.post(API_URL + "product-delete", JSON.stringify(product),
  {headers: this.headers});
  }

  findAllProducts(): Observable<any> {
    return this.http.get(API_URL + "product-all",
  {headers: this.headers});
  }

  numberOfProducts(): Observable<any> {
    return this.http.get(API_URL + "product-number",
  {headers: this.headers});
  }

  //transactions
  findAllTransactions(): Observable<any> {
    return this.http.get(API_URL + "transaction-all",
   {headers: this.headers});
  }

  numberOfTransactions(): Observable<any> {
    return this.http.get(API_URL + "transaction-number",
  {headers: this.headers});
  }
  createReservation(reserve: Reserve): Observable<any> {
    return this.http.post(API_URL + "reserve-create", JSON.stringify(reserve),
  {headers: this.headers});
  }
  numberOfReservations(): Observable<any> {
    return this.http.get(API_URL + "reservation-number",
  {headers: this.headers});
  }
  findAllReservations(): Observable<any> {
    return this.http.get(API_URL + "reservation-all",
   {headers: this.headers});
  }
  updateReserve(reserve: Reserve): Observable<any> {
    return this.http.put(API_URL + "reserve-update", JSON.stringify(reserve),
  {headers: this.headers});
  }
  deleteReserve(reserve: Reserve): Observable<any> {
    return this.http.post(API_URL + "reserve-delete", JSON.stringify(reserve),
  {headers: this.headers});
  }

  createInventory(inventory: Inventory): Observable<any> {
    return this.http.post(API_URL + "inventory-create", JSON.stringify(inventory),
  {headers: this.headers});
  }

  updateInventory(inventory: Inventory): Observable<any> {
    return this.http.put(API_URL + "inventory-update", JSON.stringify(inventory),
  {headers: this.headers});
  }

  deleteInventory(inventory: Inventory): Observable<any> {
    return this.http.post(API_URL + "inventory-delete", JSON.stringify(inventory),
  {headers: this.headers});
  }

  findAllInventories(): Observable<any> {
    return this.http.get(API_URL + "inventory-all",
  {headers: this.headers});
  }
 
  
}
