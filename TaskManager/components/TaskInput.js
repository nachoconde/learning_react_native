import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Day tasks"
          style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
        ></TextInput>

        <View style={styles.buttons}>
          
          <View style={styles.buttonSize}>
            <Button
              title="CANCEL"
              onPress={props.onCancel}
              color="red"
            ></Button>
          
          </View>
          <View style={styles.buttonSize}>
            <Button title="ADD"   onPress={addTaskHandler} ></Button>
          </View>
        
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  buttonSize: {
    width: "40%",
  },
});

export default TaskInput;
