import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import TopBar from './TopBar';

export default function SettingsScreen({ setScreen }) {
  const [brightness, setBrightness] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [sound, setSound] = useState(true);

  return (
    <View style={styles.container}>
      <TopBar title="Settings" />

      <View style={styles.content}>

        {/* Brightness */}
        <View style={styles.settingBox}>
          <Text style={styles.label}>Screen Brightness: {brightness}%</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn} onPress={() => setBrightness(Math.max(0, brightness - 10))}>
              <Text style={styles.btnText}>−</Text>
            </TouchableOpacity>
            <View style={styles.barTrack}>
              <View style={[styles.barFill, { width: `${brightness}%` }]} />
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => setBrightness(Math.min(100, brightness + 10))}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Font Size */}
        <View style={styles.settingBox}>
          <Text style={styles.label}>Text Size: {fontSize}px</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn} onPress={() => setFontSize(Math.max(12, fontSize - 2))}>
              <Text style={styles.btnText}>−</Text>
            </TouchableOpacity>
            <Text style={[styles.sampleText, { fontSize }]}>Sample Text</Text>
            <TouchableOpacity style={styles.btn} onPress={() => setFontSize(Math.min(24, fontSize + 2))}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sound */}
        <View style={styles.settingBox}>
          <Text style={styles.label}>Sound</Text>
          <View style={styles.row}>
            <Text style={styles.switchLabel}>{sound ? 'On' : 'Off'}</Text>
            <Switch
              value={sound}
              onValueChange={setSound}
              trackColor={{ false: '#ccc', true: '#0d1b4c' }}
              thumbColor={sound ? '#fff' : '#fff'}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => setScreen('home')}>
          <Text style={styles.backButtonText}>Return Home</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  content: { flex: 1, padding: 20, paddingTop: 80 },
  settingBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  label: { fontSize: 15, fontWeight: 'bold', marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  btn: {
    backgroundColor: '#0d1b4c',
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  barTrack: {
    flex: 1,
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  barFill: { height: '100%', backgroundColor: '#0d1b4c', borderRadius: 5 },
  sampleText: { flex: 1, textAlign: 'center', color: '#333' },
  switchLabel: { fontSize: 15, color: '#333', marginRight: 10 },
  backButton: {
    backgroundColor: '#c62828',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  backButtonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});