import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Text style={{ fontSize: 18 }}>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default App;
