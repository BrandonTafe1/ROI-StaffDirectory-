import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import TopBar from './TopBar';

export default function AddStaff({ setScreen, addStaff }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (value) => {
    if (/^\d*$/.test(value)) {
      setPhone(value);
      setError("");
    } else {
      setError("Phone number must contain only numbers");
    }
  };

  const handleSave = () => {
    if (!name || !role) {
      setError("Name and role are required");
      return;
    }

    if (phone.length < 8) {
      setError("Phone number must be at least 8 digits");
      return;
    }

    addStaff({
      id: Date.now(),
      name,
      role,
      email,
      phone,
      photo: require('../assets/profile.png')
    });

    setScreen("directory");
  };

  return (
    <View style={styles.container}>
      <TopBar title="Add Staff" />

      <View style={styles.content}>
        <Text style={styles.title}>Add New Staff</Text>

        {error !== "" && <Text style={styles.error}>{error}</Text>}

        <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Role" value={role} onChangeText={setRole} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />

        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={handlePhoneChange}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Staff</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={() => setScreen("directory")}>
          <Text style={styles.cancelButtonText}>Back to Directory</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 20, paddingTop: 80 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { backgroundColor: "#f2f2f2", padding: 15, borderRadius: 8, marginBottom: 15 },
  error: { color: "red", marginBottom: 10, fontWeight: "bold" },
  saveButton: { backgroundColor: "#0d1b4c", padding: 15, borderRadius: 10 },
  saveButtonText: { color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: 16 },
  cancelButton: { marginTop: 15 },
  cancelButtonText: { textAlign: "center", color: "#555", fontWeight: "bold" },
});
