import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TopBar from './TopBar';

export default function SettingsScreen({ setScreen }) {
  return (
    <View style={styles.container}>
      <TopBar title="Settings" />

      <View style={styles.content}>

        <View style={styles.settingBox}>
          <Text style={styles.label}>Screen Brightness</Text>
          <Image 
            source={require('../assets/brightnessSlider.png')}
            style={styles.fullWidthImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.settingBox}>
          <Text style={styles.label}>Adjust Text Size</Text>
          <Image 
            source={require('../assets/fontSizer.png')}
            style={styles.fullWidthImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.settingBox}>
          <Text style={styles.label}>Sound</Text>
          <Image 
            source={require('../assets/soundControl.png')}
            style={styles.fullWidthImage}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => setScreen("home")}>
          <Text style={styles.backButtonText}>RETURN HOME</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
  },
  settingBox: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  fullWidthImage: {
    width: "100%",
    height: 60,
  },
  backButton: {
    backgroundColor: "#c62828",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  backButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
