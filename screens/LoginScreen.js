import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginScren ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Login Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
