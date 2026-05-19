import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

type PageViewProps = {
  children: ReactNode;
};

const PageView = ({ children }: PageViewProps) => {
  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom", "left", "right"]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});

export default PageView;
