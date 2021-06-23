export interface LocalStorageOrderItem {
  id: number;
  sku: string;
  name: string;
  price: number;
  quantity: number;
}

export interface LocalStorageOrder {
  items: LocalStorageOrderItem[];
}

export interface LocalStorageCart {
  cartId: string;
  order: LocalStorageOrder;
}
