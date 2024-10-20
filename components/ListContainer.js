import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import ListItem from "./ListItem";
import styles from "../Appstyles";

export default function ListContainer({ data }) {
  const renderItem = ({ item }) => <ListItem>{item.name}</ListItem>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
}
