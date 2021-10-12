import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, stateIntValue, TextInput, TouchableHighlight, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback, View, Platform } from 'react-native';

export default function Form({ addHandler }) {

  const [stateIntValue, setStateIntValue] = useState('')

  const onChangeInt = (value) => {
    setStateIntValue(value)
  }

  const addNewItem = (value) => {
    if (value && value.trim()) {
      addHandler(value)
    }
    setStateIntValue('')
  }

  return (
    <View>
      <TextInput style={styles.input} value={stateIntValue} onChangeText={onChangeInt} placeholder="Add note" />
      <Button style={styles.button} title="Add" color="red" onPress={() => addNewItem(stateIntValue)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: '1px',
    padding: 8,
    marginTop: 20,
    marginBottom: 20,
    width: '60%',
    marginLeft: '20%'
  }
});
