import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Heading() {
  return (
    <View style = {styles.header}>
      <Text style ={styles.headerText}>todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 80,
  },
  headerText: {
    textAlign: "center",
    fontSize: 72,
    color: "#555",
    fontWeight: "100",
  },
});
