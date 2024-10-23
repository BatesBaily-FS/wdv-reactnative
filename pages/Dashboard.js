import {
  SafeAreaView,
  Text,
  Button,
  Platform,
  View,
  TextInput,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import ListContainer from "../components/ListContainer";
import Heading from "../components/Heading";

import { useNavigation } from "@react-navigation/native";

import styles from "../Appstyles";

export default function Dashboard({ navigation }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [store, setStore] = useState("");
  const [price, setPrice] = useState("");

  const API_URL = "https://wdv-api1-07ba9f0b6338.herokuapp.com/api/v1/items";

  useEffect(() => {
    fetchItems();
  });

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const createItem = async () => {
    if (!name || !quantity || !store || !price) {
      alert("Please fill out all fields.");
      return;
    }

    const newItem = {
      name,
      quantity: parseInt(quantity),
      store,
      price: parseFloat(price),
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("Failed to create Item");
      }

      const createdItem = await response.json();
      setData([...data, createdItem]);
      clearForm();
    } catch (error) {
      console.error(error);
      alert("Error creating item. Please try again");
    }
  };

  const clearForm = () => {
    setName("");
    setQuantity("");
    setStore("");
    setPrice("");
  };

  const handleSubmit = () => {
    createItem();
  };

  const handleItemPress = (itemId) => {
    navigation.navigate("Item", { _id: itemId });
  };

  return (
    <SafeAreaView style={styles.container2}>
      <Image
        source={require("../components/food-removebg.png")}
        style={styles.foodImg}
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
      <Text style={styles.largeHeading}>Shopping List Items</Text>
      <View style={styles.listColorBox}>
        <ListContainer navigation={navigation} data={data} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Store"
            value={store}
            onChangeText={setStore}
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </View>
        <Button
          title="Submit"
          onPress={handleSubmit}
          color="black"
          style={styles.submitButton}
        />
      </View>
      <View style={styles.platform}>
        {Platform.OS === "ios" ? <Text>IOS</Text> : <Text>NOT ON IOS</Text>}
      </View>
    </SafeAreaView>
  );
}
