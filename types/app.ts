import { Dispatch, SetStateAction } from "react";
import { Coffee, CoffeeCategory } from "./coffee";

export interface AppContextType {
  categories: CoffeeCategory[];
  coffees: Coffee[];
}

export interface CategoryFilterContextType {
  selectedCategoryId: number;
  setSelectedCategoryId: Dispatch<SetStateAction<number>>;
}

export interface FavoriteCoffees {
  favoriteCoffeeIds: number[];
  addToFavorite: (coffeeId: number) => boolean;
  removeFromFavorite: (coffeeId: number) => boolean;
}
