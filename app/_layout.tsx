import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider } from "../context/app-context";
import { FavoriteCoffeesProvider } from "../context/favorite-coffees-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <FavoriteCoffeesProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </FavoriteCoffeesProvider>
      </AppProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default RootLayout;
