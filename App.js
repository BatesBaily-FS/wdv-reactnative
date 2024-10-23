import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Button,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Network from "expo-network";

import styles from "./Appstyles";
import Heading from "./components/Heading";
import ListContainer from "./components/ListContainer";
import Dashboard from "./pages/Dashboard";
import Item from "./pages/ItemPage";

// import shoppingLogo from "../components/shopping-logo.png";

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
      <Image
        source={require("./components/shopping1.webp")}
        style={styles.backgroundImage}
      />
      <View style={styles.navBar}>
        <Button
          title="Home"
          onPress={() => navigation.navigate("HomeScreen")}
          style={styles.navButtons}
        />
        <Button
          title="Dashboard"
          onPress={() => navigation.navigate("Dashboard")}
          style={styles.navButtons}
        />
      </View>
      <View style={styles.overlay}>
        <View style={styles.headingColorBox}>
          <Text style={styles.largeHeading}>Your Digital Shopping List</Text>
        </View>
        <Image
          source={require("./components/shopping-logo.png")}
          style={styles.largeLogo}
        />
        <View style={styles.pColorBox}>
          <Heading level="4" style={styles.p}>
            Welcome to Shopping Buddy! With our help you'll always have your
            shopping list handy, not matter what! Planning done right!
          </Heading>
        </View>
        {Platform.OS === "ios" ? (
          <Text>I am IOS</Text>
        ) : (
          <Text>I am NOT ON IOS</Text>
        )}
      </View>
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
          options={{
            title: "Shopping Buddy",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#cbbfbf",
            },
            headerTintColor: "#fff",
            headerTitle: () => (
              <Text style={styles.headerTitle}>Shopping Buddy</Text>
            ),
            headerLeft: () => (
              <View style={styles.headerTitleContainer}>
                <Image
                  source={require("./components/shopping-logo.png")}
                  style={styles.logo}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerStyle: {
              backgroundColor: "#cbbfbf",
            },
            headerTintColor: "#fff",
            headerTitle: () => (
              <Text style={styles.headerTitle}>Shopping Buddy</Text>
            ),
            headerBackTitleVisible: false,
            headerRight: () => (
              <View style={styles.headerTitleContainer}>
                <Image
                  source={require("./components/shopping-logo.png")}
                  style={styles.logo}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="ItemPage"
          component={Item}
          options={{
            title: "Shopping Buddy",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#cbbfbf",
            },
            headerTintColor: "#fff",
            headerTitle: () => (
              <Text style={styles.headerTitle}>Shopping Buddy</Text>
            ),
            headerLeft: () => (
              <View style={styles.headerTitleContainer}>
                <Image
                  source={require("./components/shopping-logo.png")}
                  style={styles.logo}
                />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
