import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  largeHeading: {
    fontSize: 30,
    fontStyle: "normal",
  },
  listContainer: {
    flexGrow: 0,
    flexShrink: 0,
  },
  headingColor: {
    ...Platform.select({
      android: {
        color: "yellow",
      },
      ios: {
        color: "red",
      },
      default: {
        color: "blue",
      },
    }),
  },
});

export default styles;
