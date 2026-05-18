import { Coffee, CoffeeCategory } from "./coffee";

export interface AppContextType {
  categories: CoffeeCategory[];
  coffees: Coffee[];
}
