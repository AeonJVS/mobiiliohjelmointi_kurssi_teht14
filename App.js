import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {
  const [toBeSaid, setToBeSaid] = useState('');

  const synthesizeSpeech = () => {
    Speech.speak(toBeSaid);
  };

  return (
    <View style={styles.container} >
      <TextInput
        style={styles.input} 
        onChangeText={setToBeSaid}
        value={toBeSaid}
      />
      <Button title="Press to hear text" onPress={synthesizeSpeech} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 35,
    minWidth: 150,
    margin: 8,
    borderWidth: 1,
    padding: 8,
  },
});