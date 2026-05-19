import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import { useAppContext } from "../context/app-context";
import ProductBox from "./product-box";
import { useState } from "react";
import {
  CategoryFilterProvider,
  useCategoryFilterContext,
} from "../context/category-filter-context";

const CategoryFilter = () => {
  const { categories } = useAppContext();
  const { selectedCategoryId, setSelectedCategoryId } =
    useCategoryFilterContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={[{ id: 0, name: "All" }, ...categories]}
        keyExtractor={(item) => `coffee-types-${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryFilterContainer}
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.categoryFilterBadge,
              {
                backgroundColor:
                  selectedCategoryId === item.id
                    ? colors.secondary
                    : colors.primary,
              },
            ]}
            onPress={() => setSelectedCategoryId(() => item.id)}
          >
            <Text style={styles.categoryFilterBadgeText}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const CoffeeList = () => {
  const { selectedCategoryId } = useCategoryFilterContext();
  const { coffees } = useAppContext();

  return (
    <FlatList
      data={coffees.filter(
        (c) =>
          selectedCategoryId === 0 || c.coffeeCategoryId === selectedCategoryId,
      )}
      keyExtractor={(item) => `coffee-${item.id}`}
      numColumns={2}
      contentContainerStyle={styles.coffeeListContainer}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.coffeeItem}>
          <ProductBox coffee={item} />
        </View>
      )}
    />
  );
};

const CategoryCatalog = () => {
  return (
    <CategoryFilterProvider>
      <View style={styles.catalogContainer}>
        <CategoryFilter />
        <CoffeeList />
      </View>
    </CategoryFilterProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginHorizontal: 8,
  },
  categoryFilterContainer: {
    gap: 8,
    marginBottom: 8,
  },
  categoryFilterBadge: {
    backgroundColor: colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  categoryFilterBadgeText: {
    color: colors.surface,
  },
  coffeeListContainer: {
    paddingTop: 6,
    paddingHorizontal: 6,
  },
  coffeeItem: {
    width: "50%",
    alignItems: "stretch",
    paddingHorizontal: 6,
    paddingBottom: 12,
  },
  catalogContainer: {
    flex: 1,
  },
});

export default CategoryCatalog;
