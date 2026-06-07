import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from './TopBar';

export default function HomeScreen({ setScreen }) {
  return (
    <View style={styles.container}>
      <TopBar title="Home" />

      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => setScreen("directory")}>
          <Text style={styles.buttonText}>Staff Directory</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setScreen("settings")}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#0d1b4c",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
