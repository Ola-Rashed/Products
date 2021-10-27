import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-api-product',
  templateUrl: './api-product.component.html',
  styleUrls: ['./api-product.component.css']
})
export class ApiProductComponent implements OnInit {

  public productList : any ;
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  
}