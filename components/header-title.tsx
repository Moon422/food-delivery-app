import { StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle = ({ title }: HeaderTitleProps) => {
  return (
    <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.surface,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});

export default HeaderTitle;
