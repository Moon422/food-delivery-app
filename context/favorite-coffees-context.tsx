import { createContext, ReactNode, useContext, useState } from "react";
import { FavoriteCoffees } from "../types";

const FavoriteCoffeesContext = createContext<FavoriteCoffees | null>(null);

interface FavoriteCoffeesProviderProps {
  children: ReactNode;
}

export const FavoriteCoffeesProvider = ({
  children,
}: FavoriteCoffeesProviderProps) => {
  const [favoriteCoffeeIds, setFavoriteCoffeeIds] = useState<number[]>([]);

  const addToFavorite = (coffeeId: number) => {
    if (favoriteCoffeeIds.includes(coffeeId)) return false;

    setFavoriteCoffeeIds((prev) => [...prev, coffeeId]);
    return true;
  };

  const removeFromFavorite = (coffeeId: number) => {
    if (!favoriteCoffeeIds.includes(coffeeId)) return false;

    setFavoriteCoffeeIds((prev) => prev.filter((id) => id !== coffeeId));
    return true;
  };

  return (
    <FavoriteCoffeesContext.Provider
      value={{ favoriteCoffeeIds, addToFavorite, removeFromFavorite }}
    >
      {children}
    </FavoriteCoffeesContext.Provider>
  );
};

export const useFavoriteCoffeeContext = () => {
  const context = useContext(FavoriteCoffeesContext);
  if (!context) {
    throw new Error(
      "useAppContext must be used inside FavoriteCoffeesProvider",
    );
  }

  return context;
};
