export interface OrderSemID {
  products: number[];
}

export interface OrderWithID extends OrderSemID {
  id: number;
}

export interface OrderError {
  code: number;
  message: { error: string };
}

/* o pedido vai sair 
  {
    "order": {
      "userId": 1,
      "products": [1, 2]
    }
  }
*/
