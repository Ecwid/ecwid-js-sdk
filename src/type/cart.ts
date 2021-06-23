export interface Product {
  id: number;
  sku: string;
  name: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  cartId: string;
  items: CartItem[];
  productsQuantity: number;
}
