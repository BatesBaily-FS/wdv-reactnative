import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Network from "expo-network";

import styles from "./Appstyles";
import Heading from "./components/Heading";
import ListContainer from "./components/ListContainer";

import Item from "./pages/Item";

function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // https://wdv-api1-07ba9f0b6338.herokuapp.com/api/v1/items
    fetch(`https://wdv-api1-07ba9f0b6338.herokuapp.com/api/v1/items`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  Network.getNetworkStateAsync().then((data) => {
    console.log(data);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeHeading}>DashBoard</Text>
      <Heading level="3">This is a heading</Heading>
      {Platform.OS === "ios" ? (
        <Text>I am IOS</Text>
      ) : (
        <Text>I am NOT ON IOS</Text>
      )}
      <Button
        title="Item Details"
        onPress={() => navigation.navigate("Item")}
      />
      <ListContainer data={data} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Shopping Buddy" }}
        />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
