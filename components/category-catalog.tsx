import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import { useAppContext } from "../context/app-context";
import ProductBox from "./product-box";

const CategoryFilter = () => {
  const { categories } = useAppContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => `coffee-types-${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryFilterContainer}
        renderItem={({ item }) => (
          <Pressable
            style={styles.categoryFilterBadge}
            onPress={() => console.log(item.name)}
          >
            <Text style={styles.categoryFilterBadgeText}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const CoffeeList = () => {
  const { coffees } = useAppContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={coffees}
        keyExtractor={(item) => `coffee-${item.id}`}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.coffeeItem}>
            <ProductBox coffee={item} />
          </View>
        )}
      />
    </View>
  );
};

export const CategoryCatalog = () => {
  return (
    <View>
      <CategoryFilter />
      <CoffeeList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginHorizontal: 8,
  },
  categoryFilterContainer: {
    gap: 8,
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
  coffeeItem: {
    width: "50%",
    alignItems: "stretch",
  },
});

export default CategoryCatalog;
