export interface ProductInterface {
  name: string;
  amount: string;
}

export interface ProductWithID extends ProductInterface {
  id: number;
}