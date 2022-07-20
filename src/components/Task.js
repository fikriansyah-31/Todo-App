import { StyleSheet, Text, View, Image, TouchableOpacity, CheckBox } from "react-native";
import React, { useEffect, useState } from "react";

import axios from "axios";

import { Ionicons, Entypo } from "@expo/vector-icons";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Task({ id, childToParent, text }) {
  const [status, setStatus] = useState(false);

  const deleteTask = async () => {
    try {
      const response = await axios.delete(`https://api.kontenbase.com/query/api/v1/664c772a-6899-488e-927c-2b33811d56b4/data/${id}`);
      console.log(response.data);
      childToParent();
    } catch (error) {
      console.log(error);
    }
  };

  function handleSetStatus() {
    if (status === true) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }

  return (
    <TouchableOpacity onPress={handleSetStatus}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={!status ? styles.square : styles.squareSuccess}></View>
          <Text style={!status ? styles.itemText : styles.itemTextDone}>{text}</Text>
        </View>
        <View style={styles.itemRight}>
          <TouchableOpacity onPress={() => deleteTask()}>
            <Entypo name="trash" size={24} color="#fc6f6f" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    paddingRight: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    borderRadius: 5,
    margin: 16,
    opacity: 0.8,
  },
  squareSuccess: {
    width: 24,
    height: 24,
    backgroundColor: "#30db5e",
    borderRadius: 5,
    margin: 16,
    opacity: 0.8,
  },
  itemText: {
    maxWidth: "80%",
  },
  itemTextDone: {
    maxWidth: "80%",
    opacity: 0.5,
    textDecorationLine: "line-through",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
  checkbox: {
    marginEnd: 10,
    width: 25,
    height: 25,
  },
});
