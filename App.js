import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Input from "./components/TextInput";
import TodoList from "./components/TodoList";

let todoIndex = 0;

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState("All");

  function inputChange(inputValue) {
    console.log("Input change", inputValue);
    setInputValue(inputValue);
  }

  function submitTodo() {
    if (inputValue.match(/^s*$/)) {
      return;
    }
    const todo = {
      title: inputValue,
      todoIndex,
      complete: false,
    };

    todoIndex++;
    setTodos((todos) => [...todos, todo]);
    setInputValue("");

    console.log(inputValue);
    console.log(todos);
  }
  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input value={inputValue} onChangeText={inputChange} />
        <Button submitTodo={submitTodo} />

        <TodoList todos={todos} />
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
