import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function TopBar({ title }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/roi-logo.jpg')}
        style={styles.logo}
      />

      <Text style={styles.title}>{title}</Text>

      <Image
        source={require('../assets/profile.png')}
        style={styles.profile}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "#0d1b4c",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
