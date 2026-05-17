import React from "react";
import { SearchBar } from "../components/search-bar";
import CategoryCatalog from "../components/category-catalog";
import PageView from "../components/page-view";
import Header from "../components/header";

const Home = () => {
  return (
    <PageView>
      <Header centerElement={<SearchBar />} />
      <CategoryCatalog />
    </PageView>
  );
};

export default Home;
