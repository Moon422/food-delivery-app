import React from "react";
import { Text, View } from "react-native";
import { SearchBar } from "../components/search-bar";
import CategoryCatalog from "../components/category-catalog";

const Home = () => {
  return (
    <View>
      <SearchBar />
      <CategoryCatalog />
    </View>
  );
};

export default Home;
