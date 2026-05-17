import { Stack } from "expo-router";
import colors from "../../constants/colors";
import { Pressable, Text, View } from "react-native";

const FoodLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "Food",
        headerTitleAlign: "center",
        headerRight: () => (
          <Pressable onPress={() => console.log("icon pressed")}>
            <View style={{ paddingHorizontal: 12 }}>
              <Text>F</Text>
            </View>
          </Pressable>
        ),
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.surface,
      }}
    />
  );
};

export default FoodLayout;
