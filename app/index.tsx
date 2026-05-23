import React from "react";
import { SearchBar } from "../components/search-bar";
import CategoryCatalog from "../components/category-catalog";
import PageView from "../components/page-view";
import Header from "../components/header";
import BottomNavigation from "../components/bottom-navigation";

const Home = () => {
  return (
    <PageView>
      <Header centerElement={<SearchBar />} />
      <CategoryCatalog />
      <BottomNavigation selectedSystemName="home" />
    </PageView>
  );
};

export default Home;
