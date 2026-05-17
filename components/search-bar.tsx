import { View, TextInput, StyleSheet } from "react-native";
import colors from "../constants/colors";
import { router } from "expo-router";

export const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchField}>
        <TextInput
          placeholder="Search..."
          returnKeyType="search"
          autoCorrect={false}
          clearButtonMode="while-editing"
          onSubmitEditing={(e) => router.push({ pathname: "/food" })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 12,
    backgroundColor: colors.primary,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,

    // Android shadow
    elevation: 6,
  },
  searchField: {
    padding: 4,
    backgroundColor: colors.surface,
    borderRadius: 8,
  },
});
