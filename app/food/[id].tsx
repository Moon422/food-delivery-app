import { Pressable, Text } from "react-native";
import PageView from "../../components/page-view";
import Header from "../../components/header";
import HeaderTitle from "../../components/header-title";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import colors from "../../constants/colors";
import { useFavoriteCoffeeContext } from "../../context/favorite-coffees-context";

const Food = () => {
  const { id } = useLocalSearchParams();

  const { favoriteCoffeeIds, addToFavorite, removeFromFavorite } =
    useFavoriteCoffeeContext();

  const coffeeId = Number(id);

  const isFavorited = favoriteCoffeeIds.includes(coffeeId);

  const onFavoriteButtonPressed = () => {
    if (isFavorited) {
      removeFromFavorite(coffeeId);
    } else {
      addToFavorite(coffeeId);
    }
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
        centerElement={<HeaderTitle title="Food" />}
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

      <Text>Fuchka: {coffeeId}</Text>

      <Text>
        {isFavorited ? "This coffee is favorited ❤️" : "Not favorited"}
      </Text>
    </PageView>
  );
};

export default Food;
