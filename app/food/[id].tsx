import { Pressable, Text } from "react-native";
import PageView from "../../components/page-view";
import Header from "../../components/header";
import HeaderTitle from "../../components/header-title";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import colors from "../../constants/colors";

const Food = () => {
  const { id } = useLocalSearchParams();

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
        centerElement={<HeaderTitle title="Food" />}
      />
      <Text>Fuchka: {id}</Text>
    </PageView>
  );
};

export default Food;
