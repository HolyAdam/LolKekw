import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback, View, Platform } from 'react-native';

export default function Header() {

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>Список заметок</Text>
      <View>
      	
      </View>	
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
  	paddingTop: 20,
  	paddingBottom: 20,
  	backgroundColor: 'yellow',
  	textAlign: 'center'
  },
  text: {
  	fontSize: 18,
  	color: 'blue',
  	fontStyle: 'italic'
  }
});
