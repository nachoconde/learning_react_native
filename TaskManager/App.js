import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, FlatList } from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [listofTasks, setListofTasks] = useState([]);
  const [visible, setVisible] = useState(false);

  const addTaskHandler = (taskTitle) => {
    setListofTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle },
    ]);
    setVisible(false)

  };

  const removeTasks = (TaskId) => {
    //funcion anonima para obtener la lista de tareas
    setListofTasks((currentTasks) => {
      return currentTasks.filter((Task) => Task.id !== TaskId);
    });
  };

  const setVisibleHandler = () => {
    setVisible(true)
  };

  const cancelTaskModal = () => {
    setVisible(false)
  }

  return (
    <View style={styles.screen}>
       <Button title="New task" onPress={setVisibleHandler} /> 
        <TaskInput visible={visible} onAddTask={addTaskHandler} onCancel={cancelTaskModal}></TaskInput>
        <FlatList
          data={listofTasks}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemdata) => (
            <TaskItem
              id={itemdata.item.id}
              onDelete={removeTasks}
              title={itemdata.item.value}
            />
          )}
        ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
