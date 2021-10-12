import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback, View, Platform } from 'react-native';
import Header from './components/Header'
import Form from './components/Form'
import ListItem from './components/ListItem'

export default function App() {

  const [list, setList] = useState([
      {text: 'Купить молоко', key: '1'},
      {text: 'Купить хлеб', key: '2'},
      {text: 'Купить тыкву', key: '3'},
      {text: 'Купить сало', key: '4'},

    ])

  const textPressHandler = () => console.log('12345')
  const handleButtonPress = () => Alert.alert("Title", "Main message", [

      {text: "Да", onPress: () => console.log('yes')},
      {text: "Нет", onPress: () => console.log('no')},

    ])

  const addHandler = (text) => {
    setList((myList) => {
      return [
        { text, key: (list.length + 1).toString() },
        ...myList
      ]
    })
  }

  const deleteHandler = (key) => {
    setList((myList) => {
      return myList.filter(item => item.key !== key)
    })
  }

  return (
    <SafeAreaView>
      <Header />
      <Form addHandler={addHandler} />
      <FlatList data={list} renderItem={({ item }) => (

          <ListItem el={item} deleteHandler={deleteHandler} />

        )} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
