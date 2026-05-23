import { createContext, ReactNode, useContext, useState } from "react";
import { AppContextType, Coffee, CoffeeCategory } from "../types";

const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [categories] = useState<CoffeeCategory[]>([
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

  const [coffees] = useState<Coffee[]>([
    // 1. Espresso
    {
      id: 101,
      name: "Classic Espresso",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 3.5,
      coffeeCategoryId: 1,
      description:
        "Single shot of rich espresso. Single shot of rich espresso. Single shot of rich espresso. Single shot of rich espresso. Single shot of rich espresso. Single shot of rich espresso. Single shot of rich espresso. Single shot of rich espresso. Single shot of rich espresso. Single shot of rich espresso.",
    },
    {
      id: 102,
      name: "Double Espresso",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 4.5,
      coffeeCategoryId: 1,
      description: "Two intense espresso shots.",
    },
    {
      id: 103,
      name: "Ristretto",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 4.0,
      coffeeCategoryId: 1,
      description: "Short, concentrated espresso.",
    },
    {
      id: 104,
      name: "Lungo",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 4.2,
      coffeeCategoryId: 1,
      description: "Extended espresso with smoother taste.",
    },

    // 2. Americano
    {
      id: 201,
      name: "Classic Americano",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 4.5,
      coffeeCategoryId: 2,
    },
    {
      id: 202,
      name: "Iced Americano",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.0,
      coffeeCategoryId: 2,
    },
    {
      id: 203,
      name: "Long Black",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 4.8,
      coffeeCategoryId: 2,
    },
    {
      id: 204,
      name: "Honey Americano",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.5,
      coffeeCategoryId: 2,
    },

    // 3. Latte
    {
      id: 301,
      name: "Vanilla Latte",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.0,
      coffeeCategoryId: 3,
    },
    {
      id: 302,
      name: "Caramel Latte",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.5,
      coffeeCategoryId: 3,
    },
    {
      id: 303,
      name: "Hazelnut Latte",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.2,
      coffeeCategoryId: 3,
    },
    {
      id: 304,
      name: "Iced Latte",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.8,
      coffeeCategoryId: 3,
    },

    // 4. Cappuccino
    {
      id: 401,
      name: "Classic Cappuccino",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.5,
      coffeeCategoryId: 4,
    },
    {
      id: 402,
      name: "Dry Cappuccino",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.8,
      coffeeCategoryId: 4,
    },
    {
      id: 403,
      name: "Wet Cappuccino",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.8,
      coffeeCategoryId: 4,
    },
    {
      id: 404,
      name: "Chocolate Cappuccino",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.2,
      coffeeCategoryId: 4,
    },

    // 5. Flat White
    {
      id: 501,
      name: "Classic Flat White",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.5,
      coffeeCategoryId: 5,
    },
    {
      id: 502,
      name: "Oat Milk Flat White",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.0,
      coffeeCategoryId: 5,
    },
    {
      id: 503,
      name: "Double Shot Flat White",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.5,
      coffeeCategoryId: 5,
    },
    {
      id: 504,
      name: "Honey Flat White",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.2,
      coffeeCategoryId: 5,
    },

    // 6. Mocha
    {
      id: 601,
      name: "Classic Mocha",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.5,
      coffeeCategoryId: 6,
    },
    {
      id: 602,
      name: "White Chocolate Mocha",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 7.0,
      coffeeCategoryId: 6,
    },
    {
      id: 603,
      name: "Mint Mocha",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.8,
      coffeeCategoryId: 6,
    },
    {
      id: 604,
      name: "Iced Mocha",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.5,
      coffeeCategoryId: 6,
    },

    // 7. Macchiato
    {
      id: 701,
      name: "Classic Macchiato",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 4.5,
      coffeeCategoryId: 7,
    },
    {
      id: 702,
      name: "Caramel Macchiato",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.2,
      coffeeCategoryId: 7,
    },
    {
      id: 703,
      name: "Iced Macchiato",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.8,
      coffeeCategoryId: 7,
    },
    {
      id: 704,
      name: "Vanilla Macchiato",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.0,
      coffeeCategoryId: 7,
    },

    // 8. Cortado
    {
      id: 801,
      name: "Classic Cortado",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.0,
      coffeeCategoryId: 8,
    },
    {
      id: 802,
      name: "Honey Cortado",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.5,
      coffeeCategoryId: 8,
    },
    {
      id: 803,
      name: "Oat Cortado",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.8,
      coffeeCategoryId: 8,
    },
    {
      id: 804,
      name: "Double Cortado",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.0,
      coffeeCategoryId: 8,
    },

    // 9. Cold Brew
    {
      id: 901,
      name: "Classic Cold Brew",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 5.5,
      coffeeCategoryId: 9,
    },
    {
      id: 902,
      name: "Vanilla Cold Brew",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.0,
      coffeeCategoryId: 9,
    },
    {
      id: 903,
      name: "Salted Caramel Cold Brew",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 6.5,
      coffeeCategoryId: 9,
    },
    {
      id: 904,
      name: "Nitro Cold Brew",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 7.0,
      coffeeCategoryId: 9,
    },

    // 10. Affogato
    {
      id: 1001,
      name: "Classic Affogato",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 7.5,
      coffeeCategoryId: 10,
    },
    {
      id: 1002,
      name: "Chocolate Affogato",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 8.0,
      coffeeCategoryId: 10,
    },
    {
      id: 1003,
      name: "Hazelnut Affogato",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 8.2,
      coffeeCategoryId: 10,
    },
    {
      id: 1004,
      name: "Caramel Affogato",
      imageUrl: "https://picsum.photos/seed/espresso/300/300",
      price: 8.0,
      coffeeCategoryId: 10,
    },
  ]);

  return (
    <AppContext.Provider value={{ categories, coffees }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
};
