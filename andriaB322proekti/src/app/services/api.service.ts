import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = "https://restaurant.stepprojects.ge/api/"
  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(this.apiURL + "Products/GetAll")
    
  }

  getBasket(){
return this.http.get(this.apiURL + "Baskets/GetAll")
  }

  addToBasket(id:any){
let postReq = {
  "quantity":0,
  "price":0,
  "productId":id
}

    return this.http.post(this.apiURL + "Baskets/AddToBasket", postReq ).subscribe((data) => {
      console.log(data)
    })
      }

      deleteBasket(id: any){
        return this.http.delete(this.apiURL + `Baskets/DeleteProduct/${id}`).subscribe()
      }


editProduct(id:any){

  let putReq = {
    "quantity":1,
    "price":0,
    "productId":id
  }
  
  return this.http.put(this.apiURL + `Baskets/UpdateBasket`,putReq).subscribe()
}

categories1(){
  return this.http.get(this.apiURL + "Categories/GetAll")
}

filter(id:any){
  return this.http.get(this.apiURL + "Products/GetFiltered/${id}")
}

    }


