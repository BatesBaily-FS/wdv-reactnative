import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  View,
  TextInput,
  Alert,
  Platform,
} from "react-native";

import styles from "../Appstyles";
import Heading from "../components/Heading";
import { TouchableOpacity } from "react-native";

export default function Item({ route, navigation }) {
  const { _id } = route.params;

  const [values, setValues] = useState({
    name: "",
    quantity: "",
    store: "",
    price: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://wdv-api1-07ba9f0b6338.herokuapp.com/api/v1/items";

  useEffect(() => {
    const getItem = async () => {
      setLoading(true);
      try {
        console.log("Fetching item with ID:", _id);
        const response = await fetch(`${API_URL}/${_id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched item data", data);
        setValues({
          name: data.name,
          quantity: data.quantity.toString(),
          store: data.store,
          price: data.price.toString(),
        });
      } catch (error) {
        console.error("Error fetching item", error);
        setError(error.message || "Unexpected Error");
        Alert.alert("Error", error.message || "Unexpected Error");
      } finally {
        setLoading(false);
      }
    };
    getItem();
  }, [_id]);

  const deleteItem = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      navigation.navigate("Dashboard");
    } catch (error) {
      setError(error.message || "Unexpected Error");
      Alert.alert("Error", error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      navigation.navigate("Dashboard");
    } catch (error) {
      setError(error.message || "Unexpected Error");
      Alert.alert("Error", error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChanges = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    updateItem();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.dashboardButton}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.dashboardText}>Back to Dashboard</Text>
      </TouchableOpacity>
      <Text style={styles.largeHeading1}>Items Details</Text>
      <View style={styles.itemInfo}>
        <Text style={styles.name}>{values.name}</Text>
        <Text style={styles.label}>Quantity:</Text>
        <Text style={styles.content}>{values.quantity}</Text>
        <Text style={styles.label}>Store:</Text>
        <Text style={styles.content}>{values.store}</Text>
        <Text style={styles.label}>Price:</Text>
        <Text style={styles.content}>{values.price}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          title="Delete"
          onPress={deleteItem}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer2}>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={values.name}
            onChangeText={(text) => handleInputChanges("name", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={values.quantity}
            onChangeText={(text) => handleInputChanges("quantity", text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Store"
            value={values.store}
            onChangeText={(text) => handleInputChanges("store", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={values.price}
            onChangeText={(text) => handleInputChanges("price", text)}
            keyboardType="numeric"
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.updateButton}
        title="Update"
        onPress={handleSubmit}
      >
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
      <View style={styles.platform}>
        {Platform.OS === "ios" ? <Text>IOS</Text> : <Text>NOT ON IOS</Text>}
      </View>
    </SafeAreaView>
  );
}
