import { StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle = ({}: HeaderTitleProps) => {
  return (
    <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
      Food
    </Text>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.surface,
    textAlign: "center",
  },
});

export default HeaderTitle;
