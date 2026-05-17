import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.layout} edges={["top", "left", "right"]}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <StatusBar style="inverted" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});

export default RootLayout;
