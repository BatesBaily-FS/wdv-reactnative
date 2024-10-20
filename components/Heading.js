import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import styles from "../Appstyles";

export default function Heading({ children, level }) {
  const headingLevel = level ? level : 5;
  return (
    <View>
      <Text accessibilityRole={`h${level}`}>{children}</Text>
    </View>
  );
}
