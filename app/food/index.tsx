import { Text } from "react-native";
import PageView from "../../components/page-view";
import Header from "../../components/header";
import HeaderTitle from "../../components/header-title";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const Food = () => {
  return (
    <PageView>
      <Header centerElement={<HeaderTitle title="Food" />} />
      <Text>Fuchka</Text>
    </PageView>
  );
};

export default Food;
