export interface LocalStorageOrderItem {
  readonly productId: number;
  readonly sku: string;
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
}

export interface LocalStorageOrder {
  readonly items: LocalStorageOrderItem[];
}

export interface LocalStorageCart {
  readonly cartId: string;
  readonly order: LocalStorageOrder;
}

export interface LocalStorageCheckout {
  readonly id?: string;
  readonly itemsCount: number;
}
