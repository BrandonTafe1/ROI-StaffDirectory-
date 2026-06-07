import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TopBar from './TopBar';

export default function StaffDetails({ setScreen, selectedStaff }) {
  if (!selectedStaff) {
    return (
      <View style={styles.container}>
        <TopBar title="Staff Details" />
        <Text>No staff selected.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TopBar title="Staff Details" />

      <View style={styles.content}>
        <Image source={selectedStaff.photo} style={styles.photo} />

        <Text style={styles.name}>{selectedStaff.name}</Text>
        <Text style={styles.role}>{selectedStaff.role}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{selectedStaff.email}</Text>

          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>{selectedStaff.phone}</Text>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => setScreen("directory")}>
          <Text style={styles.backButtonText}>Back to Directory</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    alignItems: "center",
  },
  photo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  role: {
    fontSize: 16,
    color: "#555",
    marginBottom: 25,
    textAlign: "center",
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#f2f202",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 14,
  },
  value: {
    fontSize: 15,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "#c62828",
    padding: 15,
    borderRadius: 10,
    width: "80%",
  },
  backButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
