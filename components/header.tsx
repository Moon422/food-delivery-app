import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../constants/colors";

interface HeaderProps {
  leftElement?: ReactNode;
  centerElement?: ReactNode;
  rightElement?: ReactNode;
}

const Header = ({ leftElement, centerElement, rightElement }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {leftElement && <View style={styles.side}>{leftElement}</View>}
      <View style={styles.center}>{centerElement && centerElement}</View>
      {rightElement && <View style={styles.side}>{rightElement}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: colors.primary,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,

    // Android shadow
    elevation: 6,
  },
  side: {
    minWidth: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    flex: 1,
    alignItems: "stretch",
  },
});

export default Header;
