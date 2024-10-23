import React from "react";
import { Text, View } from "react-native";
import { ItemModel } from "../components/models/Item";
import styles from "../Appstyles";

export default function ListItem({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headingColor}>{item.name}</Text>
    </View>
  );
}
