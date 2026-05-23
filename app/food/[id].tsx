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

const Food = () => {
  const DESCRIPTION_LIMIT = 120;

  const { id } = useLocalSearchParams();

  const coffeeId = Number(id);

  const { coffees, categories } = useAppContext();

  const { favoriteCoffeeIds, addToFavorite, removeFromFavorite } =
    useFavoriteCoffeeContext();

  const selectedCoffee = useMemo(
    () => coffees.find((c) => c.id === coffeeId),
    [coffees, coffeeId],
  );

  const selectedCategory = useMemo(
    () => categories.find((c) => c.id === selectedCoffee?.coffeeCategoryId),
    [categories, selectedCoffee],
  );

  const isFavorited = favoriteCoffeeIds.includes(coffeeId);

  const coffeeSizes = [
    { systemName: "small", text: "S" },
    { systemName: "medium", text: "M" },
    { systemName: "large", text: "L" },
  ];

  const onFavoriteButtonPressed = () => {
    if (isFavorited) {
      removeFromFavorite(coffeeId);
    } else {
      addToFavorite(coffeeId);
    }
  };

  const [expanded, setExpanded] = useState(false);

  const description = selectedCoffee?.description ?? "";

  const isLongDescription = description.length > DESCRIPTION_LIMIT;

  const displayedDescription =
    isLongDescription && !expanded
      ? description.slice(0, DESCRIPTION_LIMIT) + "..."
      : description;

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
          <Pressable onPress={onFavoriteButtonPressed}>
            <Ionicons
              name={isFavorited ? "heart" : "heart-outline"}
              size={26}
              color={colors.surface}
            />
          </Pressable>
        }
      />

      <ScrollView style={{ padding: 12 }}>
        {/* Image */}
        <Image
          source={{ uri: selectedCoffee?.imageUrl }}
          style={styles.coffeeBannerImage}
          resizeMode="cover"
        />

        {/* Title */}
        <Text style={styles.coffeeTitle} numberOfLines={1}>
          {selectedCoffee?.name ?? "Unnamed"}
        </Text>

        {/* Category + Add button */}
        <View style={styles.categoryRow}>
          {selectedCategory && (
            <Text style={styles.categoryText}>{selectedCategory.name}</Text>
          )}

          <Pressable style={styles.addButton}>
            <Ionicons name="bag-add" size={18} color={colors.surface} />
          </Pressable>
        </View>

        {/* Rating */}
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={18} color={colors.primary} />

          <Text style={styles.ratingText}>
            4.8 <Text style={styles.ratingCount}>(230)</Text>
          </Text>
        </View>

        <View style={styles.hr} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>

          <Text style={styles.descriptionText}>{displayedDescription}</Text>

          {isLongDescription && (
            <Pressable onPress={() => setExpanded((prev) => !prev)}>
              <Text style={styles.readMoreText}>
                {expanded ? "Show less" : "Read more"}
              </Text>
            </Pressable>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Size</Text>

          <View style={styles.sizeRow}>
            {coffeeSizes.map((cs) => (
              <Pressable
                key={`coffee-details-sizes-${cs.systemName}`}
                style={styles.sizeBox}
              >
                <Text style={styles.sizeText}>{cs.text}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </PageView>
  );
};

const styles = StyleSheet.create({
  coffeeBannerImage: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#eee",
  },

  coffeeTitle: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 20,
  },

  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
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
    marginBottom: 20,
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
    marginBottom: 20,
  },

  section: {
    marginBottom: 20,
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
});

export default Food;
