import React from "react";
import { Text, View } from "react-native";
import styles from "../Appstyles";

export default function ListItem({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headingColor}>{children}</Text>
    </View>
  );
}
