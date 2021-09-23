import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function Input(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        placeholderTextColor="#888"
        onChangeText={props.onChangeText}
        value={props.value}
        sectionColor="#666666"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
