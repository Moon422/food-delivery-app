import { createContext, ReactNode, useContext, useState } from "react";
import { AppContextType, Category } from "../types";

const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [categories] = useState<Category[]>([
    {
      id: 1,
      name: "Espresso (Short Black)",
      description:
        "A concentrated shot of coffee made by forcing pressurized hot water through finely-ground beans.",
      flavorProfile: "Intense, bold, and rich with a layer of crema on top.",
    },
    {
      id: 2,
      name: "Caffè Americano",
      description: "A shot of espresso diluted with hot water.",
      flavorProfile:
        "Similar in strength to drip coffee but retains espresso complexity.",
    },
    {
      id: 3,
      name: "Caffè Latte",
      description:
        "Espresso combined with a large amount of steamed milk and a light foam layer.",
      flavorProfile: "Smooth, creamy, and mild.",
    },
    {
      id: 4,
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and milk foam.",
      flavorProfile: "Balanced, airy, often topped with cocoa or cinnamon.",
    },
    {
      id: 5,
      name: "Flat White",
      description: "Espresso with steamed milk and velvety microfoam.",
      flavorProfile: "Stronger and more coffee-forward than a latte.",
    },
    {
      id: 6,
      name: "Caffè Mocha",
      description: "Espresso with steamed milk and chocolate.",
      flavorProfile: "Sweet, rich, chocolatey.",
    },
    {
      id: 7,
      name: "Espresso Macchiato",
      description: "Espresso topped with a small amount of foamed milk.",
      flavorProfile: "Strong with a slight creamy softness.",
    },
    {
      id: 8,
      name: "Cortado",
      description: "Espresso mixed with an equal amount of warm milk.",
      flavorProfile: "Balanced, bold but softened by milk.",
    },
    {
      id: 9,
      name: "Cold Brew",
      description: "Coffee steeped in cold water for 12-24 hours.",
      flavorProfile: "Smooth, low acidity, strong caffeine.",
    },
    {
      id: 10,
      name: "Affogato",
      description: "Espresso poured over vanilla ice cream.",
      flavorProfile: "Bitter espresso meets sweet creamy dessert.",
    },
  ]);

  return (
    <AppContext.Provider value={{ categories }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
};
