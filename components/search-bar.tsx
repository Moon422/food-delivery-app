import { View, TextInput, StyleSheet } from "react-native";
import colors from "../constants/colors";
import { router } from "expo-router";

export const SearchBar = () => {
  return (
    <View style={styles.searchField}>
      <TextInput
        placeholder="Search..."
        returnKeyType="search"
        autoCorrect={false}
        clearButtonMode="while-editing"
        onSubmitEditing={(e) => router.push({ pathname: "/food" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchField: {
    marginHorizontal: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.surface,
    borderRadius: 8,
  },
});
