import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { Coffee } from "../types";
import { useAppContext } from "../context/app-context";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

interface ProductBoxProps {
  coffee: Coffee;
}

const ProductBox = ({ coffee }: ProductBoxProps) => {
  const { categories } = useAppContext();

  const categoryName = categories.find(
    (el) => el.id === coffee.coffeeCategoryId,
  )?.name;

  return (
    <View style={styles.productBoxContainer}>
      {/* Image */}
      {/* <Image
        source={{ uri: coffee.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      /> */}

      {/* Category */}
      <Text style={styles.categoryName} numberOfLines={1}>
        {categoryName}
      </Text>

      {/* Name */}
      <Text style={styles.productName} numberOfLines={1}>
        {coffee.name}
      </Text>

      {/* Price + button */}
      <View style={styles.priceBox}>
        <Text style={styles.price}>${coffee.price}</Text>

        <Pressable style={styles.addButton}>
          <Ionicons name="add" size={18} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productBoxContainer: {
    flex: 1,
    backgroundColor: colors.surface,
    margin: 8,
    borderRadius: 16,
    padding: 12,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 110,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "#eee",
  },

  categoryName: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: "500",
    marginBottom: 4,
  },

  productName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginBottom: 10,
  },

  priceBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
  },

  price: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },

  addButton: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductBox;
