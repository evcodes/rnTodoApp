import React from "react";

import { TouchableHighlight, View, Text, StyleSheet } from "react-native";

const Button = ({ submitTodo }) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableHighlight
        underlayColor="#efefef"
        style={styles.button}
        onPress={submitTodo}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "flex-end",
  },
  button: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#666",
    fontWeight: "600",
  },
});

export default Button;
