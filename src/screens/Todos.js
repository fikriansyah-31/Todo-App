import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";

import Task from "../components/Task";
import { FlatList } from "native-base";

export default function Todos() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const childToParent = () => { //Itu mendapat tugas dari database dan menetapkan status tugas ke tugas dari database
    getTasks();
    console.log("KE TRIGGER");
  };

  useEffect(() => {
    getTasks();
  }, []);

  //== Get Task 
  const getTasks = async () => {
    try {
      const response = await axios.get("https://api.kontenbase.com/query/api/v1/664c772a-6899-488e-927c-2b33811d56b4/data");
      console.log(response.data);
      setTasks(response.data); 
    } catch (error) {
      console.log(error);
    }
  };

  function _renderTask({ item }) {
    return <Task text={item.notes} id={item._id} childToParent={childToParent} />;
  }

  //== Add Task
  const handleAddTask = async () => {
    if (task.length !== 0) {
      try {
        let data = {
          notes: task,
        };
        data = JSON.stringify(data);
        console.log(data);
        const response = await axios.post("https://api.kontenbase.com/query/api/v1/664c772a-6899-488e-927c-2b33811d56b4/data", data);
        console.log(response);
        getTasks();
        setTask("");
      } catch (error) {
        console.log(error);
      }
    } else {
      return Alert.alert("Alert Title", "My Alert Msg", [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Today Task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        {/* Task */}
        <View style={styles.items}>
          <FlatList data={tasks} renderItem={_renderTask} keyExtractor={(item) => item._id} refreshing={isLoading} onRefresh={getTasks} />
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={(text) => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 16,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "70%",
  },
  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
