import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PageView from "../../components/page-view";
import Header from "../../components/header";
import HeaderTitle from "../../components/header-title";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import colors from "../../constants/colors";
import { useFavoriteCoffeeContext } from "../../context/favorite-coffees-context";
import { useAppContext } from "../../context/app-context";
import { useMemo, useState } from "react";

const DESCRIPTION_LIMIT = 120;

const COFFEE_SIZES = [
  { systemName: "small", text: "S" },
  { systemName: "medium", text: "M" },
  { systemName: "large", text: "L" },
];

const Food = () => {
  const { id } = useLocalSearchParams();
  const coffeeId = Number(id);

  const { coffees, categories } = useAppContext();
  const { favoriteCoffeeIds, addToFavorite, removeFromFavorite } =
    useFavoriteCoffeeContext();

  const [expanded, setExpanded] = useState(false);

  const selectedCoffee = useMemo(
    () => coffees.find((c) => c.id === coffeeId),
    [coffees, coffeeId],
  );

  const selectedCategory = useMemo(
    () => categories.find((c) => c.id === selectedCoffee?.coffeeCategoryId),
    [categories, selectedCoffee],
  );

  const isFavorited = favoriteCoffeeIds.includes(coffeeId);

  const description = selectedCoffee?.description ?? "";

  const isLongDescription = description.length > DESCRIPTION_LIMIT;

  const displayedDescription = useMemo(() => {
    if (!isLongDescription) return description;

    return expanded
      ? description
      : description.slice(0, DESCRIPTION_LIMIT) + "...";
  }, [description, expanded, isLongDescription]);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFromFavorite(coffeeId);
    } else {
      addToFavorite(coffeeId);
    }
  };

  const toggleDescription = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <PageView>
      <Header
        leftElement={
          router.canGoBack() && (
            <Pressable onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={26} color={colors.surface} />
            </Pressable>
          )
        }
        centerElement={<HeaderTitle title="Details" />}
        rightElement={
          <Pressable onPress={toggleFavorite}>
            <Ionicons
              name={isFavorited ? "heart" : "heart-outline"}
              size={26}
              color={colors.surface}
            />
          </Pressable>
        }
      />

      <ScrollView style={styles.container}>
        {/* IMAGE */}
        <Image
          source={{ uri: selectedCoffee?.imageUrl }}
          style={styles.coffeeBannerImage}
        />

        {/* TITLE */}
        <Text style={styles.coffeeTitle} numberOfLines={1}>
          {selectedCoffee?.name ?? "Unnamed"}
        </Text>

        {/* CATEGORY */}
        <View style={styles.categoryRow}>
          {selectedCategory && (
            <Text style={styles.categoryText}>{selectedCategory.name}</Text>
          )}

          <Pressable style={styles.addButton}>
            <Ionicons name="bag-add" size={18} color={colors.surface} />
          </Pressable>
        </View>

        {/* RATING */}
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={18} color={colors.primary} />
          <Text style={styles.ratingText}>
            4.8 <Text style={styles.ratingCount}>(230)</Text>
          </Text>
        </View>

        <View style={styles.hr} />

        {/* DESCRIPTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>

          <Text style={styles.descriptionText}>
            {displayedDescription}{" "}
            {isLongDescription && (
              <Text onPress={toggleDescription} style={styles.readMoreText}>
                {expanded ? " Show less" : " Read more"}
              </Text>
            )}
          </Text>
        </View>

        {/* SIZE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Size</Text>

          <View style={styles.sizeRow}>
            {COFFEE_SIZES.map((cs) => (
              <Pressable key={cs.systemName} style={styles.sizeBox}>
                <Text style={styles.sizeText}>{cs.text}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomActionBar}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>
            $ {(selectedCoffee?.price ?? 0).toFixed(2)}
          </Text>
        </View>

        <Pressable style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </Pressable>
      </View>
    </PageView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },

  coffeeBannerImage: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: colors.surface,
  },

  coffeeTitle: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 15,
  },

  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  categoryText: {
    fontWeight: "600",
  },

  addButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 15,
  },

  ratingText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.primary,
  },

  ratingCount: {
    fontSize: 13,
    fontWeight: "400",
    color: "#888",
  },

  hr: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginBottom: 15,
  },

  section: {
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#111",
  },

  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#555",
  },

  sizeRow: {
    flexDirection: "row",
    gap: 10,
  },

  sizeBox: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.surface,
    flex: 1,
  },

  sizeText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
    textAlign: "center",
  },

  readMoreText: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },

  bottomActionBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
    backgroundColor: colors.surface,
    paddingVertical: 16,
    paddingHorizontal: 20,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
  },

  priceLabel: {
    fontSize: 12,
    color: "#888",
    marginBottom: 2,
  },

  priceValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111",
  },

  buyButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 14,
    flex: 1,
  },

  buyButtonText: {
    color: colors.surface,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Food;
