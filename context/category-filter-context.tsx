import { createContext, ReactNode, useContext, useState } from "react";
import { CategoryFilterContextType } from "../types";

const CategoryFilterContext = createContext<CategoryFilterContextType | null>(
  null,
);

interface CategoryFilterProviderProps {
  children: ReactNode;
}

export const CategoryFilterProvider = ({
  children,
}: CategoryFilterProviderProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  return (
    <CategoryFilterContext.Provider
      value={{ selectedCategoryId, setSelectedCategoryId }}
    >
      {children}
    </CategoryFilterContext.Provider>
  );
};

export const useCategoryFilterContext = () => {
  const context = useContext(CategoryFilterContext);
  if (!context) {
    throw new Error("useAppContext must be used inside CategoryFilterProvider");
  }

  return context;
};
