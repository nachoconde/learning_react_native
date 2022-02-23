import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

const TaskItem = (props) => {
  return (
      <TouchableOpacity onPress={props.onDelete.bind (this, props.id)}>
    <View style={styles.list}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 5,
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ccc",
    padding: 10,
  },
});

export default TaskItem;
