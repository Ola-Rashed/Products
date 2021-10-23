import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  productTitle : string = "product";

  @Input() productCard ;
  @Output() sendProductCard = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectedProduct(){
    this.sendProductCard.emit(this.productCard)
  }
  


}
