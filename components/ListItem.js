import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback, View, Platform } from 'react-native';

export default function ListItem({ el, deleteHandler }) {

  return (
    <TouchableHighlight onPress={deleteHandler.bind(null, el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: '5px',
    backgroundColor: '#fed',
    border: '2px solid purple',
    marginVertical: 12,
    width: '60%',
    marginLeft: '20%'
  }
});
