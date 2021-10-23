export interface Product {
  id: number;
  title: string;
  price: number,
  category:string;
  description: string;
  image: string;
   rating: {
  rate: number;
  count_in_stock: number;
  }
}