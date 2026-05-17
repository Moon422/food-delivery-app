import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";

type PageViewProps = {
  children: ReactNode;
};

const PageView = ({ children }: PageViewProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});

export default PageView;
