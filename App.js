import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Heading from "./components/Heading";
import Input from "./components/TextInput";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState("All");

  function inputChange(inputValue) {
    console.log("Input change", inputValue);
    setInputValue(inputValue);
  }
  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input value={inputValue} onChangeText={inputChange} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
