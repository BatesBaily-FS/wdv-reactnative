import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import ListItem from "./ListItem";
import styles from "../Appstyles";

export default function ListContainer({ navigation, data }) {
  const handleItemPress = (itemId) => {
    navigation.navigate("ItemPage", { _id: itemId });
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item._id)}>
      <ListItem item={item} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
}
