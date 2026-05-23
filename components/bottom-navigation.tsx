import { Pressable, StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

type IoniconName = ComponentProps<typeof Ionicons>["name"];

interface BottomNavigationProps {
  selectedSystemName: string;
}

const BottomNavigation = ({ selectedSystemName }: BottomNavigationProps) => {
  const navigationButtons: {
    icon: IoniconName;
    iconSelected: IoniconName;
    systemName: string;
    id: number;
  }[] = [
    { icon: "home-outline", iconSelected: "home", systemName: "home", id: 1 },
    {
      icon: "heart-outline",
      iconSelected: "heart",
      systemName: "favorites",
      id: 2,
    },
    { icon: "bag-outline", iconSelected: "bag", systemName: "cart", id: 3 },
    {
      icon: "notifications-outline",
      iconSelected: "notifications",
      systemName: "notifications",
      id: 4,
    },
  ];
  return (
    <View style={styles.bottomNaviationContainer}>
      {navigationButtons.map((navButton) => (
        <Pressable key={`navigation-button-${navButton.id}`}>
          <Ionicons
            name={
              navButton.systemName === selectedSystemName
                ? navButton.iconSelected
                : navButton.icon
            }
            size={26}
            color={colors.primary}
          />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNaviationContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.surface,
    paddingVertical: 20,
  },
});

export default BottomNavigation;
