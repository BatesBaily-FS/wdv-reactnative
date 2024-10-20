import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";

import styles from "../Appstyles";
import Heading from "../components/Heading";
import ListContainer from "../components/ListContainer";

export default function Item({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeHeading}>Item</Text>
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </SafeAreaView>
  );
}
