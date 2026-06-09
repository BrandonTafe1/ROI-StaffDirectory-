import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import TopBar from './TopBar';

export default function DirectoryScreen({ setScreen, staffList, setSelectedStaff }) {
  const [query, setQuery] = useState('');

  const filtered = staffList.filter((staff) => {
    const q = query.toLowerCase();
    return (
      staff.name.toLowerCase().includes(q) ||
      staff.role.toLowerCase().includes(q) ||
      (staff.department && staff.department.toLowerCase().includes(q))
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <TopBar title="Staff Directory" />

      <ScrollView style={styles.container}>

        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search by name, role or department..."
          placeholderTextColor="#999"
          value={query}
          onChangeText={setQuery}
        />

        {/* Add Staff Button */}
        <TouchableOpacity style={styles.addButton} onPress={() => setScreen('add')}>
          <Text style={styles.addButtonText}>+ Add Staff</Text>
        </TouchableOpacity>

        {/* No results message */}
        {filtered.length === 0 && (
          <Text style={styles.noResults}>No staff found for "{query}"</Text>
        )}

        {/* Staff Cards */}
        {filtered.map((staff) => (
          <TouchableOpacity
            key={staff.id}
            style={styles.card}
            onPress={() => {
              setSelectedStaff(staff);
              setScreen('details');
            }}
          >
            <View style={styles.photoCircle}>
              <Image source={staff.photo} style={styles.photo} />
            </View>
            <Text style={styles.name}>{staff.name}</Text>
            <Text style={styles.role}>{staff.role}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.backButton} onPress={() => setScreen('home')}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  searchBar: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#0d1b4c',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noResults: {
    textAlign: 'center',
    color: '#999',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  photoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  role: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#c62828',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
  },
  backButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});