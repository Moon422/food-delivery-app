export interface CoffeeCategory {
  id: number;
  name: string;
  description: string;
  flavorProfile: string;
}

export interface Coffee {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  description?: string;
  coffeeCategoryId: number;
}
