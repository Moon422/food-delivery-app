import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider } from "../context/app-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </AppProvider>
      <StatusBar style="inverted" />
    </SafeAreaProvider>
  );
};

export default RootLayout;
