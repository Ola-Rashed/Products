import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CounterComponent } from './counter/counter.component';
import { UserListComponent } from './user-list/user-list.component';
import {ApiProductComponent}from './api-product/api-product.component';
import {CartComponent} from './cart/cart.component'

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'template',
    component: TemplateFormComponent,
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent,
    
  },   
      
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'api-product',
    component: ApiProductComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path:'counter',
    component : CounterComponent,
  },
  {
    path:'users',
    component : UserListComponent,
  },
  {
    path:'**',
    component: NotFoundComponent,
  },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
